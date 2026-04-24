'use client';

import { useRef, useState, useEffect } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { Eraser, Check } from 'lucide-react';

interface SignaturePadProps {
  onSave: (signatureDataUrl: string) => void;
  onClear: () => void;
  initialSignature?: string;
}

export default function SignaturePad({ onSave, onClear, initialSignature }: SignaturePadProps) {
  const sigCanvas = useRef<SignatureCanvas>(null);
  // `cleared` tracks whether the user explicitly wiped the pad this session.
  // Combined with `initialSignature` it gives us hasSignature purely by
  // derivation - no setState inside an effect.
  const [cleared, setCleared] = useState(false);
  const [drawn, setDrawn] = useState(false);
  const hasSignature = drawn || (!cleared && !!initialSignature);

  // Paint the initial signature onto the canvas imperatively. This effect
  // only writes to an external system (the canvas ref), never to React state.
  useEffect(() => {
    if (initialSignature && sigCanvas.current) {
      sigCanvas.current.fromDataURL(initialSignature);
    }
  }, [initialSignature]);

  const clear = () => {
    sigCanvas.current?.clear();
    setDrawn(false);
    setCleared(true);
    onClear();
  };

  const handleEnd = () => {
    if (sigCanvas.current?.isEmpty()) {
      setDrawn(false);
    } else {
      setDrawn(true);
      setCleared(false);
      const dataUrl = sigCanvas.current?.getTrimmedCanvas().toDataURL('image/png');
      if (dataUrl) {
        onSave(dataUrl);
      }
    }
  };

  return (
    <div className="rounded-xl border border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50 p-4 space-y-3">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Signature</h3>
        {hasSignature && (
          <span className="flex items-center gap-1 text-[10px] font-medium text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-2 py-0.5 rounded-full">
            <Check size={10} /> Saved
          </span>
        )}
      </div>
      
      <div className="relative border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 overflow-hidden">
        <SignatureCanvas
          ref={sigCanvas}
          canvasProps={{
            className: 'w-full h-32 cursor-crosshair touch-none',
          }}
          penColor="black"
          onEnd={handleEnd}
        />
        {!hasSignature && (
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <span className="text-sm text-gray-400 dark:text-gray-500 font-medium">Draw signature here</span>
          </div>
        )}
      </div>

      <div className="flex justify-end mt-2">
        <button
          onClick={clear}
          disabled={!hasSignature}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Eraser size={14} />
          Clear
        </button>
      </div>
    </div>
  );
}
