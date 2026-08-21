import React, { useState } from 'react';

export default function LinkGenerator() {
  const [url, setUrl] = useState('');
  const [generated, setGenerated] = useState('');

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    // Mock functionality: just append a hash
    const hash = Math.random().toString(36).substring(2, 8);
    setGenerated(\`https://udocumentview.com/v/\${hash}\`);
  };

  return (
    <div className="p-6 border border-gray-200 rounded-lg bg-gray-50 my-6">
      <h3 className="text-lg font-medium mb-4">Secure Link Generator (Mock)</h3>
      <form onSubmit={handleGenerate} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Source Document URL</label>
          <input
            type="url"
            value={url}
            onChange={e => setUrl(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
            placeholder="https://example.com/document.pdf"
          />
        </div>
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Generate Preview Link
        </button>
      </form>

      {generated && (
        <div className="mt-4 p-4 bg-gray-100 rounded border border-gray-300">
          <p className="text-sm text-gray-700 mb-2">Your secure preview link:</p>
          <code className="block p-2 bg-white border border-gray-200 rounded text-sm break-all">
            {generated}
          </code>
        </div>
      )}

      <noscript>
        <div className="mt-4 p-4 bg-yellow-50 text-yellow-900 rounded border border-yellow-200">
          Please enable JavaScript to generate links. Alternatively, use our REST API.
        </div>
      </noscript>
    </div>
  );
}
