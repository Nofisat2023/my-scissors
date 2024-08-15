import React, { useState } from 'react';
import './style/shortenUrl.css';
import { analytics } from '../firebase/firebase-config';  // Import analytics instance from Firebase
import { logEvent } from 'firebase/analytics';

// Helper function to validate the URL
const isValidUrl = (url: string): boolean => {
  try {
    new URL(url); // Throws if URL is invalid
    return true;
  } catch (error) {
    return false;
  }
};

const UrlShortener: React.FC = () => {
  const [url, setUrl] = useState<string>('');
  const [shortenedLink, setShortenedLink] = useState<string | null>(null);
  const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleShorten = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    setShortenedLink(null);
    setQrCodeUrl(null);

    if (!url) {
      setError("Enter your URL");
      return;
    }

    if (!isValidUrl(url)) {
      setError("Invalid URL");
      return;
    }

    setLoading(true);

    try {
      // Shorten the URL
      const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`);

      if (!response.ok) {
        throw new Error(`Failed to shorten URL: ${response.statusText}`);
      }

      const shortUrl = await response.text();
      setShortenedLink(shortUrl);

      // Log event to Firebase Analytics
      logEvent(analytics, 'url_shortened', {
        original_url: url,
        shortened_url: shortUrl,
      });

      // Generate QR Code
      const qrCodeResponse = await fetch(`https://qrickit.com/api/qr?d=${encodeURIComponent(shortUrl)}&qrsize=150`);
      if (!qrCodeResponse.ok) {
        throw new Error('Failed to generate QR code');
      }
      const qrCodeImageUrl = qrCodeResponse.url;
      setQrCodeUrl(qrCodeImageUrl);

      // Log event to Firebase Analytics
      logEvent(analytics, 'qr_code_generated', {
        shortened_url: shortUrl,
        qr_code_url: qrCodeImageUrl,
      });

    } catch (error) {
      setError('Failed to shorten URL');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (shortenedLink) {
      navigator.clipboard.writeText(shortenedLink)
        .then(() => alert('URL copied to clipboard!'))
        .catch(err => console.error('Failed to copy URL: ', err));
    }
  };

  return (
    <div className='url-shortener-container'>
      <h1 className='url-shortener-title'>URL Shortener</h1>
      <form className='url-shortener-form' onSubmit={handleShorten}>
        <label htmlFor="urlInput" className='url-shortener-label'>Input your long URL:</label>
        <input
          type="url"
          value={url}
          className='url-shortener-input'
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL to shorten"
          required
        />
        <button className='url-shortener-button' type="submit" disabled={loading}>
          {loading ? 'Shortening...' : 'Shorten URL'}
        </button>
      </form>
      {error && <p className="url-shortener-error">{error}</p>}
      {shortenedLink && (
        <div className="shortened-url-container">
          <h2 className="shortened-url-title">Shortened URL</h2>
          <a className="shortened-url-link" href={shortenedLink} target="_blank" rel="noopener noreferrer">{shortenedLink}</a>
          <button className="shortened-url-copy-button" onClick={copyToClipboard}>Copy</button>
        </div>
      )}
      {qrCodeUrl && (
        <div className="qr-code-container">
          <h2 className="qr-code-title">QR Code</h2>
          <img className="qr-code-image" src={qrCodeUrl} alt="QR Code" />
        </div>
      )}
    </div>
  );
};

export default UrlShortener;
