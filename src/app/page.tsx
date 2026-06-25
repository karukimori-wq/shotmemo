"use client";

import { useEffect, useState } from "react";

import { supabase } from "../lib/supabase";

export default function Home() {

  const [status, setStatus] = useState("接続確認中...");

  useEffect(() => {

    async function test() {

      const { error } = await supabase

        .from("screenshots")

        .select("*")

        .limit(1);

      if (error) {

        setStatus("接続エラー");

        console.error(error);

      } else {

        setStatus("Supabase接続成功 🎉");

      }

    }

    test();

  }, []);

  return (

    <main style={{ padding: 20 }}>

      <h1>ShotMemo</h1>

      <p>{status}</p>

    </main>

  );

}
