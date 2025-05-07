<template>
    <div class="w-full flex justify-center">
        <div class="bg-white p-8 w-3/4 h-full">
            <div class="flex justify-between gap-20 mb-10">
                <h1 class="w-4/5 text-3xl font-bold">
                    {{$t('payment.info.title')}}
                    Qadam School
                </h1>
                <p>
                    {{$t('payment.info.text')}}
                </p>
            </div>
            <div class="w-full flex gap-8 h-full">
                <div class="w-5/7">
                    <h3 class="my-4 text-3xl font-bold">{{$t('payment.info.details-title')}}:</h3>
                    <hr>
                    <div class="flex mt-8">
                        <div class="flex items-start">
                            <img class="p-1 pr-2" src="../assets/price-1.svg" alt="">

                            <div class="display flex flex-col gap-2">
                                <h4 class="text-xl font-bold">{{$t('payment.info.unique-title')}}</h4>
                                <p>{{$t('payment.info.unique-text')}}</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <img class="p-1 pr-2" src="../assets/price-1.svg" alt="">

                            <div class="display flex flex-col gap-2">
                                <h4 class="text-xl font-bold">{{$t('payment.info.unique-title')}}</h4>
                                <p>{{$t('payment.info.unique-text')}}</p>
                            </div>
                        </div>
                    </div>

                    <div class="flex mt-8">
                        <div class="flex items-start">
                            <img class="p-1 pr-2" src="../assets/price-1.svg" alt="">

                            <div class="display flex flex-col gap-2">
                                <h4 class="text-xl font-bold">{{$t('payment.info.unique-title')}}</h4>
                                <p>{{$t('payment.info.unique-text')}}</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <img class="p-1 pr-2" src="../assets/price-1.svg" alt="">

                            <div class="display flex flex-col gap-2">
                                <h4 class="text-xl font-bold">{{$t('payment.info.unique-title')}}</h4>
                                <p>{{$t('payment.info.unique-text')}}</p>
                            </div>
                        </div>
                    </div>

                    <div class="flex mt-8">
                        <div class="flex items-start">
                            <img class="p-1 pr-2" src="../assets/price-1.svg" alt="">

                            <div class="display flex flex-col gap-2">
                                <h4 class="text-xl font-bold">{{$t('payment.info.unique-title')}}</h4>
                                <p>{{$t('payment.info.unique-text')}}</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <img class="p-1 pr-2" src="../assets/price-1.svg" alt="">

                            <div class="display flex flex-col gap-2">
                                <h4 class="text-xl font-bold">{{$t('payment.info.unique-title')}}</h4>
                                <p>{{$t('payment.info.unique-text')}}</p>
                            </div>
                        </div>
                    </div>

                    <div class="flex mt-8">
                        <div class="flex items-start">
                            <img class="p-1 pr-2" src="../assets/price-1.svg" alt="">
                            <div class="display flex flex-col gap-2">
                                <h4 class="text-xl font-bold">{{$t('payment.info.unique-title')}}</h4>
                                <p>{{$t('payment.info.unique-text')}}</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <img class="p-1 pr-2" src="../assets/price-1.svg" alt="">

                            <div class="display flex flex-col gap-2">
                                <h4 class="text-xl font-bold">{{$t('payment.info.unique-title')}}</h4>
                                <p>{{$t('payment.info.unique-text')}}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-2/7 bg-[#F3F5F8] p-4">
                    <div class="flex h-full flex-col justify-between">
                        <div>
                            <h1 class="text-3xl font-bold mb-4">{{$t('footer.payment')}}</h1>
                            <hr>
                            <div class="mt-4">
                                <p>{{$t('payment.info.study')}}:</p>
                                <h1 class="text-4xl text-[#E87C43] font-bold">2 405 000 ₸</h1>
                            </div>
                            <div class="mt-4">
                                <p>{{$t('payment.info.food')}}:</p>
                                <h1 class="text-4xl text-[#E87C43] font-bold">495 000 ₸</h1>
                            </div>
                        </div>
                        <div class="flex flex-col gap-4 items-center">
                            <p>{{$t('payment.info.full')}}</p>
                            <button
                                class="bg-gradient-to-r w-full from-orange-400 to-yellow-400 text-black font-semibold px-4 py-2 rounded">
                                {{ $t('main-btn') }}
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>