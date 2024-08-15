import React from 'react';
import QRCode from 'qrcode.react';

interface QRCodeGeneratorProps {
  url: string;
}

const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = ({ url }) => {
  return (
    <div>
      <QRCode value={url} />
    </div>
  );
};

export default QRCodeGenerator;
