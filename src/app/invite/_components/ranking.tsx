import Image from 'next/image'
import React from 'react'
import cooper from '../../../assets/medal-cooper.svg'
import gold from '../../../assets/medal-gold.svg'
import silver from '../../../assets/medal-silver.svg'

function Ranking() {
  return (
    <div className="w-full max-w-[445px] space-y-5">
        <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
          Ranking de indicações
        </h2>

        <div className="space-y-4">
          <div className=" relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
            <span className="text-gray-300 text-sm leading-none">
              <span className="font-semibold">1º</span> | Tiago Alves
            </span>

            <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
              1030
            </span>

            <Image
              src={gold}
              alt="glod-medal"
              className="absolute top-0 right-8"
            />
          </div>

          <div className=" relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
            <span className="text-gray-300 text-sm leading-none">
              <span className="font-semibold">2º</span> | Tiago Alves
            </span>

            <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
              1030
            </span>

            <Image
              src={silver}
              alt="silver-medal"
              className="absolute top-0 right-8"
            />
          </div>

          <div className=" relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
            <span className="text-gray-300 text-sm leading-none">
              <span className="font-semibold">3º</span> | Tiago Alves
            </span>

            <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
              1030
            </span>

            <Image
              src={cooper}
              alt="cooper-medal"
              className="absolute top-0 right-8"
            />
          </div>
        </div>
      </div>
  )
}

export default Ranking
