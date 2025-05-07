<template>
    <div class="w-full flex justify-center">
        <div
            class="flex flex-col w-3/4 md:flex-row justify-between items-start px-6 md:px-20 py-10 space-y-6 md:space-y-0">
            <div class="text-black font-bold text-3xl flex flex-col items-start">
                <p>{{ $t('academic.hero.title') }}</p>
                <p>Qadam School</p>
            </div>

            <div class="max-w-xl space-y-4 text-sm text-black">
                <p class="text-orange-500 font-semibold uppercase">
                    {{ $t('academic.hero.title-1') }}<br />
                    {{ $t('academic.hero.title-2') }}
                </p>
                <p>
                    {{ $t('academic.hero.text-1') }}<br />
                    {{ $t('academic.hero.text-2') }}<br />
                    {{ $t('academic.hero.text-3') }}
                </p>
                <p>
                    {{ $t('academic.hero.footer-1') }}<br />
                    {{ $t('academic.hero.footer-2') }}<br />
                    {{ $t('academic.hero.footer-3') }}
                </p>
            </div>
        </div>
    </div>
</template>