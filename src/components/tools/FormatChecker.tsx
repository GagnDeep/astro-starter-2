import React, { useState } from 'react';

const supportedFormats = ['.pdf', '.docx', '.txt', '.csv'];
const unsupportedFormats = ['.xlsx', '.pptx', '.zip', '.exe'];

export default function FormatChecker() {
  const [ext, setExt] = useState('');

  const checkFormat = (val: string) => {
    if (!val) return null;
    let formatted = val.toLowerCase().trim();
    if (!formatted.startsWith('.')) formatted = '.' + formatted;

    if (supportedFormats.includes(formatted)) return true;
    if (unsupportedFormats.includes(formatted)) return false;
    return undefined; // Unknown
  };

  const status = checkFormat(ext);

  return (
    <div className="p-6 border border-gray-200 rounded-lg bg-gray-50 my-6">
      <h3 className="text-lg font-medium mb-4">Format Support Checker</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">File Extension (e.g. .pdf)</label>
          <input
            type="text"
            value={ext}
            onChange={e => setExt(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
            placeholder=".pdf"
          />
        </div>
        {status === true && (
          <div className="mt-4 p-4 bg-green-50 text-green-900 rounded border border-green-200">
            ✅ <strong>{ext}</strong> is fully supported for browser preview.
          </div>
        )}
        {status === false && (
          <div className="mt-4 p-4 bg-red-50 text-red-900 rounded border border-red-200">
            ❌ <strong>{ext}</strong> is not supported. Users will be prompted to download the file instead.
          </div>
        )}
        {status === undefined && ext.length > 1 && (
          <div className="mt-4 p-4 bg-yellow-50 text-yellow-900 rounded border border-yellow-200">
            ⚠️ Unknown format <strong>{ext}</strong>. We recommend testing a sample file first.
          </div>
        )}
        <noscript>
          <div className="mt-4 p-4 bg-yellow-50 text-yellow-900 rounded border border-yellow-200">
            Please enable JavaScript to use the interactive checker.
            <br/><br/>
            <strong>Supported Formats:</strong> .pdf, .docx, .txt, .csv<br/>
            <strong>Unsupported Formats:</strong> .xlsx, .pptx, .zip, .exe
          </div>
        </noscript>
      </div>
    </div>
  );
}
