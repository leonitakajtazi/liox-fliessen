import React, { useState } from 'react';
import { BUSINESS_CONFIG } from '../config/business';
import { Link } from '../context/RouterContext';
import { CheckCircle2, AlertCircle, Loader2, Send, Phone } from 'lucide-react';

interface ContactFormProps {
  defaultService?: string;
}

export function ContactForm({ defaultService }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: defaultService || 'sonstiges',
    message: '',
    privacyAccepted: false,
    honeypot: '', // Spam bot protection
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    message: string;
    referenceId?: string;
  } | null>(null);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Bitte geben Sie Ihren vollständigen Namen ein.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse an.';
    }


    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Bitte beschreiben Sie Ihr Vorhaben in mindestens 10 Zeichen.';
    }

    if (!formData.privacyAccepted) {
      newErrors.privacyAccepted = 'Bitte stimmen Sie der Datenschutzerklärung zu.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitResult(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitResult({
          success: true,
          message: data.message || 'Vielen Dank für Ihre Anfrage! Wir melden uns in Kürze.',
          referenceId: data.referenceId,
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          service: defaultService || 'sonstiges',
          message: '',
          privacyAccepted: false,
          honeypot: '',
        });
        setErrors({});
      } else {
        if (data.validationErrors) {
          setErrors(data.validationErrors);
        }
        setSubmitResult({
          success: false,
          message: data.error || 'Beim Absenden ist ein Fehler aufgetreten. Bitte überprüfen Sie Ihre Eingaben.',
        });
      }
    } catch (err) {
      setSubmitResult({
        success: false,
        message: 'Der Server konnte vorübergehend nicht erreicht werden. Bitte rufen Sie uns direkt an oder versuchen Sie es gleich erneut.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white border border-[#a09282]/30 p-6 sm:p-10 shadow-sm relative">
      <div className="mb-8">
        <h3 className="text-2xl font-serif text-[#2f2e2e] mb-2">
          Unverbindliches Angebot anfordern
        </h3>
        <p className="text-sm text-[#2f2e2e]/75">
          Beschreiben Sie kurz, was Sie vorhaben. Wir melden uns persönlich bei Ihnen, um die nächsten Schritte zu besprechen.
        </p>
      </div>

      {submitResult && (
        <div
          role="alert"
          className={`p-5 mb-8 border ${
            submitResult.success
              ? 'bg-[#ece7e1]/60 border-[#a09282] text-[#2f2e2e]'
              : 'bg-red-50 border-red-300 text-red-900'
          }`}
        >
          <div className="flex items-start gap-3">
            {submitResult.success ? (
              <CheckCircle2 className="w-5 h-5 text-[#a09282] shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            )}
            <div>
              <p className="font-semibold text-sm mb-1">{submitResult.message}</p>
              {submitResult.referenceId && (
                <p className="text-xs text-[#2f2e2e]/70">
                  Referenznummer Ihrer Anfrage: <strong className="font-mono text-[#2f2e2e]">{submitResult.referenceId}</strong>
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        {/* Spam Honeypot - Hidden from humans */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website-field">Bitte dieses Feld leer lassen</label>
          <input
            id="website-field"
            type="text"
            name="honeypot"
            value={formData.honeypot}
            onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* Row 1: Name & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="form-name" className="block text-xs font-semibold uppercase tracking-wider text-[#2f2e2e] mb-2">
              Ihr Name <span className="text-[#a09282]">*</span>
            </label>
            <input
              id="form-name"
              type="text"
              name="name"
              autoComplete="name"
              required
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
                if (errors.name) setErrors({ ...errors, name: '' });
              }}
              className={`w-full px-4 py-3 bg-[#ece7e1]/20 border ${
                errors.name ? 'border-red-500' : 'border-[#a09282]/40'
              } text-[#2f2e2e] text-sm focus:border-[#2f2e2e] focus:bg-white transition-colors`}
              placeholder="z. B. Dr. Thomas Becker"
            />
            {errors.name && <p className="mt-1.5 text-xs text-red-600 font-medium">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="form-email" className="block text-xs font-semibold uppercase tracking-wider text-[#2f2e2e] mb-2">
              E-Mail-Adresse <span className="text-[#a09282]">*</span>
            </label>
            <input
              id="form-email"
              type="email"
              name="email"
              autoComplete="email"
              required
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                if (errors.email) setErrors({ ...errors, email: '' });
              }}
              className={`w-full px-4 py-3 bg-[#ece7e1]/20 border ${
                errors.email ? 'border-red-500' : 'border-[#a09282]/40'
              } text-[#2f2e2e] text-sm focus:border-[#2f2e2e] focus:bg-white transition-colors`}
              placeholder="beispiel@domain.de"
            />
            {errors.email && <p className="mt-1.5 text-xs text-red-600 font-medium">{errors.email}</p>}
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="form-message" className="block text-xs font-semibold uppercase tracking-wider text-[#2f2e2e] mb-2">
            Ihre Nachricht <span className="text-[#a09282]">*</span>
          </label>
          <textarea
            id="form-message"
            name="message"
            rows={4}
            required
            value={formData.message}
            onChange={(e) => {
              setFormData({ ...formData, message: e.target.value });
              if (errors.message) setErrors({ ...errors, message: '' });
            }}
            className={`w-full px-4 py-3 bg-[#ece7e1]/20 border ${
              errors.message ? 'border-red-500' : 'border-[#a09282]/40'
            } text-[#2f2e2e] text-sm focus:border-[#2f2e2e] focus:bg-white transition-colors`}
            placeholder="Wie können wir Ihnen helfen?"
          ></textarea>
          {errors.message && <p className="mt-1.5 text-xs text-red-600 font-medium">{errors.message}</p>}
        </div>

        {/* Privacy Checkbox */}
        <div className="pt-2">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="privacyAccepted"
              checked={formData.privacyAccepted}
              onChange={(e) => {
                setFormData({ ...formData, privacyAccepted: e.target.checked });
                if (errors.privacyAccepted) setErrors({ ...errors, privacyAccepted: '' });
              }}
              className="mt-1 w-4 h-4 text-[#2f2e2e] border-[#a09282] focus:ring-[#2f2e2e]"
            />
            <span className="text-xs text-[#2f2e2e]/80 leading-relaxed">
              Ich stimme zu, dass meine Angaben zur Kontaktaufnahme und Beantwortung meiner Projektanfrage gemäß der{' '}
              <Link href="/datenschutz" className="underline text-[#2f2e2e] font-semibold hover:text-[#a09282]">
                Datenschutzerklärung
              </Link>{' '}
              gespeichert und verarbeitet werden. Diese Einwilligung kann jederzeit widerrufen werden. <span className="text-[#a09282]">*</span>
            </span>
          </label>
          {errors.privacyAccepted && (
            <p className="mt-1.5 text-xs text-red-600 font-medium">{errors.privacyAccepted}</p>
          )}
        </div>

        {/* Submit Button & Direct Call fallback */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#2f2e2e] text-[#ece7e1] text-xs font-semibold uppercase tracking-wider border border-[#2f2e2e] hover:bg-[#2f2e2e]/90 active:bg-[#2f2e2e] transition-colors disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-[#a09282]" />
                <span>Wird gesendet...</span>
              </>
            ) : (
              <>
                <span>Unverbindliches Angebot anfordern</span>
                <Send className="w-4 h-4 text-[#a09282]" />
              </>
            )}
          </button>

          <a
            href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
            className="inline-flex items-center gap-2 text-xs font-medium text-[#2f2e2e] hover:text-[#a09282] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#a09282]" />
            <span>Direkt anrufen: {BUSINESS_CONFIG.phone}</span>
          </a>
        </div>
      </form>
    </div>
  );
}
