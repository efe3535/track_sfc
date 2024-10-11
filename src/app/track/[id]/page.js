"use client"

import Header from "@/app/components/header"
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import useSWR from "swr"
import Loading from "@/app/loading";
import { useRouter } from "next/navigation";
const fetcher = (url, id) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
  myHeaders.append("Accept", "application/json, text/javascript, */*; q=0.01");

  const raw = `tracknumber=${id}`;

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };
  return fetch(url, requestOptions)
    .then((response) => response.json()).catch(console.err)
}

const FollowPage = ({ params }) => {
  const id = params.id;
  const router = useRouter();
  const { data, error, isValidating } = useSWR('https://www.sendfromchina.com/track/track/get-track-for-web', url => fetcher(url, params.id))

  if (!data) return <Loading />
  if (error || data.count < 1) {
    return <Loading customText={"Hata!"} />
  }

  const { order_code, orderInfo, delivered_inr_en, trackingList } = data;
  const { numbers, sender_country, country } = orderInfo

  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-6" >
      <Header left={"Send From China - Kargo Takip"} right={params.id} />
      <Toaster />
      <div className="flex flex-col gap-6">
        <p className="text-white text-3xl">Sipariş kodu: {data.order_code}</p>
        <p className="text-white text-3xl">Sipariş bilgisi:</p>
        <div className="ml-6">
          <p className="text-white text-xl">Adet: {numbers}</p>
          <p className="text-white text-xl">Gönderen ülke: {sender_country.en_name}</p>
          <p className="text-white text-xl">Alıcı ülke: {country.en_name}</p>
        </div>
        <p className="text-white text-3xl">Sipariş durumu: {delivered_inr_en}</p>
        <div className="ml-6">
          {trackingList.map((item, ind) => (
            <p key={ind}>{item.date} - {item.location} - {item.statu}</p>
          ))}
        </div>
      </div>
    </main >
  )
}
export default FollowPage;