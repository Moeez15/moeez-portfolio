'use client';

import Image from 'next/image';

interface ProfilePhotoProps {
  imageUrl: string | null;
}

export default function ProfilePhoto({ imageUrl }: ProfilePhotoProps) {
  const shadowStyle = {
    boxShadow: '0 0 40px rgba(99,102,241,0.3), 0 0 80px rgba(34,211,238,0.15)',
  };

  if (imageUrl) {
    return (
      <div
        style={{
          background: 'linear-gradient(135deg, #6366F1, #22D3EE)',
          padding: '3px',
          borderRadius: '9999px',
          display: 'inline-block',
          ...shadowStyle,
        }}
      >
        <div style={{ borderRadius: '9999px', overflow: 'hidden', width: 420, height: 420 }}>
          <Image
            src={imageUrl}
            alt="Moeez Ahmad"
            width={420}
            height={420}
            style={{ objectFit: 'cover', borderRadius: '9999px' }}
          />
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        width: 220,
        height: 220,
        borderRadius: '9999px',
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        ...shadowStyle,
      }}
    >
      <span
        className="gradient-text"
        style={{ fontSize: 56, fontWeight: 700, lineHeight: 1 }}
      >
        MA
      </span>
      <span
        className="font-mono"
        style={{ fontSize: 11, color: '#9CA3AF', marginTop: 8, letterSpacing: '0.15em' }}
      >
        PHOTO
      </span>
    </div>
  );
}
