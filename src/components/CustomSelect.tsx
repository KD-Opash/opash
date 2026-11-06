'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export interface SelectOption {
  value: string;
  label: string;
}

interface CustomSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: (string | SelectOption)[];
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  name?: string;
  id?: string;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

export default function CustomSelect({
  value,
  onChange,
  options,
  placeholder = 'Select an option',
  required = false,
  disabled = false,
  name,
  id,
  icon,
  style,
  className = '',
}: CustomSelectProps) {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Normalize options to { value, label }
  const normalizedOptions: SelectOption[] = options.map((opt) =>
    typeof opt === 'string' ? { value: opt, label: opt } : opt
  );

  const selectedOption = normalizedOptions.find((opt) => opt.value === value);
  const hasValidSelection = Boolean(selectedOption && selectedOption.value !== '');

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleSelect = (val: string) => {
    onChange(val);
    setIsOpen(false);
  };

  const mintColor = isLight ? '#008a75' : '#00ffd1';

  return (
    <div
      ref={containerRef}
      className={`opash-custom-select-wrap ${className}`}
      style={{
        position: 'relative',
        width: '100%',
        userSelect: 'none',
      }}
    >
      {/* Hidden input for form submission */}
      {name && <input type="hidden" name={name} value={value} required={required} />}

      {/* Trigger Field */}
      <div
        id={id}
        role="combobox"
        aria-expanded={isOpen}
        tabIndex={disabled ? -1 : 0}
        onClick={() => {
          if (!disabled) setIsOpen((prev) => !prev);
        }}
        onKeyDown={(e) => {
          if (!disabled && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            setIsOpen((prev) => !prev);
          }
        }}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.8rem 1.05rem',
          borderRadius: '10px',
          background: isLight ? '#f8fafc' : 'rgba(255, 255, 255, 0.04)',
          border: isOpen
            ? `1.5px solid ${mintColor}`
            : isLight
            ? '1px solid #cbd5e1'
            : '1px solid rgba(255, 255, 255, 0.15)',
          color: hasValidSelection ? (isLight ? '#0f172a' : '#ffffff') : isLight ? '#94a3b8' : '#64748b',
          fontSize: '0.95rem',
          cursor: disabled ? 'not-allowed' : 'pointer',
          outline: 'none',
          boxSizing: 'border-box',
          transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
          boxShadow: isOpen
            ? isLight
              ? '0 0 0 3px rgba(0, 138, 117, 0.15)'
              : '0 0 0 3px rgba(0, 255, 209, 0.18)'
            : 'none',
          ...style,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', minWidth: 0, flex: 1, marginRight: '0.5rem' }}>
          {icon && <span style={{ marginRight: '0.65rem', display: 'inline-flex', alignItems: 'center', flexShrink: 0 }}>{icon}</span>}
          <span
            style={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {hasValidSelection ? selectedOption?.label : (selectedOption?.label || placeholder)}
          </span>
        </div>

        <ChevronDown
          size={18}
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
            color: isOpen ? mintColor : isLight ? '#64748b' : '#94a3b8',
            flexShrink: 0,
          }}
        />
      </div>

      {/* Dropdown Menu (Opens directly below field's bottom line) */}
      {isOpen && (
        <div
          role="listbox"
          style={{
            position: 'absolute',
            top: 'calc(100% + 4px)',
            left: 0,
            width: '100%',
            maxHeight: '230px',
            overflowY: 'auto',
            background: isLight ? '#ffffff' : '#0a1424',
            border: isLight ? '1px solid #cbd5e1' : '1px solid rgba(255, 255, 255, 0.18)',
            borderRadius: '12px',
            boxShadow: isLight
              ? '0 12px 30px rgba(15, 23, 42, 0.12), 0 4px 10px rgba(0, 0, 0, 0.04)'
              : '0 16px 40px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 255, 209, 0.1)',
            zIndex: 9999,
            padding: '6px',
            boxSizing: 'border-box',
            scrollbarWidth: 'thin',
            scrollbarColor: isLight ? '#cbd5e1 transparent' : 'rgba(255,255,255,0.2) transparent',
          }}
        >
          {normalizedOptions.map((opt) => {
            const isSelected = opt.value === value;
            return (
              <div
                key={opt.value}
                role="option"
                aria-selected={isSelected}
                onClick={() => handleSelect(opt.value)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.65rem 0.85rem',
                  borderRadius: '8px',
                  fontSize: '0.92rem',
                  fontWeight: isSelected ? 700 : 500,
                  cursor: 'pointer',
                  color: isSelected ? mintColor : isLight ? '#1e293b' : '#f1f5f9',
                  background: isSelected
                    ? isLight
                      ? 'rgba(0, 138, 117, 0.08)'
                      : 'rgba(0, 255, 209, 0.1)'
                    : 'transparent',
                  transition: 'background 0.15s ease, color 0.15s ease',
                  marginBottom: '2px',
                }}
                onMouseEnter={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.background = isLight
                      ? '#f1f5f9'
                      : 'rgba(255, 255, 255, 0.06)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
              >
                <span>{opt.label}</span>
                {isSelected && <Check size={16} color={mintColor} />}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
