'use client';

import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';

type Props = {
  error: Error;
  reset(): void;
};

export default function Error({ error, reset }: Props) {
  const t = useTranslations('Error');

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <PageLayout title={t('title')}>
      <div>
        {t.rich('description', {
          // eslint-disable-next-line react/no-unstable-nested-components
          p: (chunks) => <p className="mt-4">{chunks}</p>,
          // eslint-disable-next-line react/no-unstable-nested-components
          retry: (chunks) => (
            <button
              className="text-white underline underline-offset-2"
              onClick={reset}
              type="button"
            >
              {chunks}
            </button>
          ),
        })}
      </div>
    </PageLayout>
  );
}
