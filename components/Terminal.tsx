'use client';

import { useEffect, useRef, useState } from 'react';

interface HistoryEntry {
  type: 'input' | 'output';
  text: string;
}

const COMMANDS: Record<string, string> = {
  help: `Available commands:
  about        → Learn about Moeez
  experience   → Work history
  projects     → Featured projects
  skills       → Technical skills
  education    → Academic background
  contact      → Get in touch
  clear        → Clear terminal`,
  about: `Moeez Ahmad - Software Engineer
Virginia Tech CS Graduate (Dec 2025)
I'm a software engineer focused on Applied AI and full-stack development, interested in building software systems that solve real-world problems. I enjoy turning AI models into real, usable products and am currently seeking full-time roles in Applied AI or Software Engineering. I value a growth mindset and am always curious to learn and improve.`,
  experience: `1. Software Developer @ VT Visionarium Lab (Aug–Dec 2025)
2. ML Research Assistant @ VT CS (Jan–Aug 2025)
3. Undergraduate TA @ VT CS (Aug–Dec 2025)
4. SWAT Technician @ VT CoE (Jan 2024 – Sep 2025)`,
  projects: `InvestQuest — AI-powered investment analysis (Python, FastAPI, Docker)
TravelMate  — AI travel planning assistant (Node.js, React, GPT-4)`,
  skills: `Languages:  Java, Python, C, SQL, JavaScript, HTML/CSS
Frameworks: PyTorch, React.js, Node.js, Express.js
Tools:      Git, Docker, Linux, MySQL, MongoDB
Libraries:  pandas, NumPy, scikit-learn, Keras`,
  education: `Virginia Tech — BS Computer Science
Blacksburg, VA | GPA: 3.58 / 4.0 | Dec 2025`,
  contact: `Email:    moeez0915@gmail.com
LinkedIn: linkedin.com/in/moeezahmad15
GitHub:   github.com/Moeez15`,
};

export default function Terminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryEntry[]>([
    { type: 'output', text: 'Welcome to Moeez Ahmad\'s interactive terminal.' },
    { type: 'output', text: "Type 'help' for available commands." },
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const newHistory: HistoryEntry[] = [
      ...history,
      { type: 'input', text: cmd },
    ];

    if (trimmed === 'clear') {
      setHistory([
        { type: 'output', text: 'Terminal cleared. Type \'help\' for available commands.' },
      ]);
      return;
    }

    const response = COMMANDS[trimmed] || `Command not found: '${trimmed}'. Type 'help' for available commands.`;
    newHistory.push({ type: 'output', text: response });
    setHistory(newHistory);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    handleCommand(input);
    setInput('');
  };

  return (
    <section
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '0 24px 96px',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div style={{ width: '100%', maxWidth: 700 }}>
        {/* Title Bar */}
        <div
          style={{
            background: 'rgba(30,30,40,0.9)',
            borderRadius: '12px 12px 0 0',
            padding: '12px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            borderBottom: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#FF5F57', display: 'block' }} />
          <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#FFBD2E', display: 'block' }} />
          <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#28C840', display: 'block' }} />
          <span
            className="font-mono"
            style={{ color: '#9CA3AF', fontSize: 13, marginLeft: 8 }}
          >
            moeez@portfolio ~ terminal
          </span>
        </div>

        {/* Terminal Body */}
        <div
          ref={bodyRef}
          style={{
            background: 'rgba(11,11,18,0.95)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderTop: 'none',
            borderRadius: '0 0 12px 12px',
            padding: '20px',
            minHeight: 280,
            maxHeight: 400,
            overflowY: 'auto',
            cursor: 'text',
          }}
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((entry, i) => (
            <div key={i} style={{ marginBottom: 6 }}>
              {entry.type === 'input' ? (
                <div className="font-mono" style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                  <span style={{ color: '#22D3EE' }}>❯</span>
                  <span style={{ color: '#E5E7EB', fontSize: 14 }}>{entry.text}</span>
                </div>
              ) : (
                <pre
                  className="font-mono"
                  style={{
                    color: '#9CA3AF',
                    fontSize: 13,
                    lineHeight: 1.6,
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word',
                    margin: 0,
                  }}
                >
                  {entry.text}
                </pre>
              )}
            </div>
          ))}

          {/* Input Line */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 4 }}>
            <span className="font-mono" style={{ color: '#22D3EE', fontSize: 14, flexShrink: 0 }}>❯</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="font-mono"
              style={{
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: '#E5E7EB',
                fontSize: 14,
                flex: 1,
                caretColor: '#22D3EE',
              }}
              autoComplete="off"
              spellCheck={false}
            />
          </form>
        </div>
      </div>
    </section>
  );
}
