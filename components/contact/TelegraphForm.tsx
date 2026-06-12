'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

const schema = z.object({
  name:    z.string().min(2, 'Name must be at least 2 characters'),
  email:   z.string().email('Enter a valid email address'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
})

type FormValues = z.infer<typeof schema>

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function TelegraphForm() {
  const [status, setStatus] = useState<Status>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormValues) => {
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(data),
      })
      if (res.ok) {
        setStatus('success')
        reset()
        setTimeout(() => setStatus('idle'), 6000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 5000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const inputStyle: React.CSSProperties = {
    width:           '100%',
    background:      'transparent',
    border:          'none',
    borderBottom:    '1px solid var(--color-aged-gold)',
    padding:         '0.5rem 0',
    fontFamily:      'var(--font-body)',
    fontSize:        '0.95rem',
    color:           'var(--color-ink)',
    transition:      'border-bottom-color 200ms',
  }

  return (
    <div style={{ maxWidth: '600px' }}>
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            style={{
              textAlign:        'center',
              padding:          '3rem 2rem',
              border:           '3px double var(--color-vintage-green)',
              backgroundColor:  'var(--color-surface-low)',
            }}
          >
            {/* Stamp animation */}
            <motion.div
              initial={{ scale: 2, rotate: -15, opacity: 0 }}
              animate={{ scale: 1, rotate: -8, opacity: 0.9 }}
              transition={{ duration: 0.15, ease: [0.0, 0.9, 0.57, 1.0] }}
              style={{ marginBottom: '1.5rem' }}
            >
              <span style={{
                fontFamily:    'var(--font-display)',
                fontWeight:    900,
                fontSize:      '2rem',
                color:         'var(--color-vintage-green)',
                border:        '4px solid var(--color-vintage-green)',
                padding:       '4px 16px',
                letterSpacing: '0.2em',
                transform:     'rotate(-8deg)',
                display:       'inline-block',
              }}>
                SENT ✦
              </span>
            </motion.div>
            <CheckCircle size={32} style={{ color: 'var(--color-vintage-green)', margin: '0 auto 1rem' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.25rem', color: 'var(--color-ink)', marginBottom: '0.5rem' }}>
              Message Dispatched
            </h3>
            <p style={{ fontFamily: 'var(--font-body)', color: 'var(--color-outline)', fontSize: '0.9rem' }}>
              Your telegraph has been received. I&apos;ll respond within 24 hours.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            aria-label="Contact form"
          >
            {/* Name */}
            <div style={{ marginBottom: '2rem' }}>
              <label
                htmlFor="contact-name"
                style={{
                  display:       'block',
                  fontFamily:    'var(--font-mono)',
                  fontSize:      'var(--text-body-xs)',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  color:         'var(--color-form-label)',
                  marginBottom:  'var(--space-2)',
                }}
              >
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                autoComplete="name"
                style={inputStyle}
                className="telegraph-input"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
                {...register('name')}
              />
              {errors.name && (
                <p id="name-error" role="alert" style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-body-xs)', color: 'var(--color-error)', marginTop: 'var(--space-1)' }}>
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div style={{ marginBottom: '2rem' }}>
              <label
                htmlFor="contact-email"
                style={{
                  display:       'block',
                  fontFamily:    'var(--font-mono)',
                  fontSize:      'var(--text-body-xs)',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  color:         'var(--color-form-label)',
                  marginBottom:  'var(--space-2)',
                }}
              >
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                autoComplete="email"
                style={inputStyle}
                className="telegraph-input"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                {...register('email')}
              />
              {errors.email && (
                <p id="email-error" role="alert" style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-body-xs)', color: 'var(--color-error)', marginTop: 'var(--space-1)' }}>
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Subject */}
            <div style={{ marginBottom: '2rem' }}>
              <label
                htmlFor="contact-subject"
                style={{
                  display:       'block',
                  fontFamily:    'var(--font-mono)',
                  fontSize:      'var(--text-body-xs)',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  color:         'var(--color-form-label)',
                  marginBottom:  'var(--space-2)',
                }}
              >
                Subject
              </label>
              <input
                id="contact-subject"
                type="text"
                style={inputStyle}
                className="telegraph-input"
                aria-invalid={!!errors.subject}
                aria-describedby={errors.subject ? 'subject-error' : undefined}
                {...register('subject')}
              />
              {errors.subject && (
                <p id="subject-error" role="alert" style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-body-xs)', color: 'var(--color-error)', marginTop: 'var(--space-1)' }}>
                  {errors.subject.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div style={{ marginBottom: '2.5rem' }}>
              <label
                htmlFor="contact-message"
                style={{
                  display:       'block',
                  fontFamily:    'var(--font-mono)',
                  fontSize:      'var(--text-body-xs)',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  color:         'var(--color-form-label)',
                  marginBottom:  'var(--space-2)',
                }}
              >
                Message
              </label>
              <textarea
                id="contact-message"
                rows={5}
                style={{
                  ...inputStyle,
                  resize:  'vertical',
                  minHeight: '120px',
                }}
                className="telegraph-input"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
                {...register('message')}
              />
              {errors.message && (
                <p id="message-error" role="alert" style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-body-xs)', color: 'var(--color-error)', marginTop: 'var(--space-1)' }}>
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Error state */}
            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  display:      'flex',
                  alignItems:   'center',
                  gap:          'var(--space-2)',
                  marginBottom: 'var(--space-6)',
                  color:        'var(--color-error)',
                  fontFamily:   'var(--font-mono)',
                  fontSize:     'var(--text-body-xs)',
                  padding:      'var(--space-3) var(--space-4)',
                  border:       '1px solid var(--color-error)',
                }}
                role="alert"
              >
                <AlertCircle size={16} /> Failed to send. Please try again or email directly.
              </motion.div>
            )}

            {/* Submit */}
            <button
              id="contact-submit"
              type="submit"
              disabled={status === 'loading'}
              className="ink-wash-btn"
              style={{
                borderColor: 'var(--color-ink)',
                color:       'var(--color-ink)',
                opacity:     status === 'loading' ? 0.6 : 1,
              }}
              aria-label="Send message"
            >
              {status === 'loading' ? (
                'Transmitting…'
              ) : (
                <>
                  Dispatch Message <Send size={14} aria-hidden="true" />
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>

      <style>{``}</style>
    </div>
  )
}
