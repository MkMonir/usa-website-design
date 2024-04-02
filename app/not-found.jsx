/* eslint-disable react/no-unescaped-entities */
'use client';

import { Breadcrumb } from '@/components/common/Breadcrumb';
import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <Breadcrumb title="Page Not Found!" />
      <section class="bg-white">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-sm text-center">
            {/* TITLE */}
            <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary">
              404
            </h1>

            {/* TEXT */}
            <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">
              Something's missing.
            </p>
            <p class="mb-4 text-lg font-light text-gray-500">
              Sorry, we can't find that page. You'll find lots to explore on the home page.{' '}
            </p>

            {/* ACTION BUTTON */}
            <div className="flex justify-center">
              <Link href="/" class="btn btn-secondary w-fit">
                Back to Homepage
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}