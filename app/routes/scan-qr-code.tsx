import React  from 'react';
import { QrReader } from "react-qr-reader";

const ScanQRPage = () => {
    const [qrResult, setQRResult] = React.useState<string | undefined>(undefined);

    React.useEffect(() => {
      if (qrResult) {
        window.location.href = qrResult;
      }
    },[qrResult]);

    return (
        <>
            <QrReader
                constraints={{ facingMode: "environment" }}
                scanDelay={300}
                onResult={(result, error) => {
                  setQRResult(result?.getText());
                    if (error) {
                        console.info(error);
                    }
                }}
                style={{ width: '100%' }}
                legacyMode={true}
            />
        </>
    );
};

export default ScanQRPage;
