"use client";
import { useEffect, useState } from "react";
import { FETCH_GET, FETCH_POST } from "../utils/Call";
import { IStateAddress } from "@/types/sgis";
import { useAppDispatch } from "@/store/configStore";
import { userInfoChangeEmail } from "@/slice/userInfo/userInfoSlice";

const consumer_secret = "b7ca6ac1bac64ac6a261";
const consumer_key = "436c25ed8c9541ff99ca";

const Cities = () => {
  const [accessKey, setAccessKey] = useState("");
  const [statesList, setStatesList] = useState<IStateAddress>();
  const [selectedState, setSelectedState] = useState<IStateAddress>();

  const fetchAccessKey = async () => {
    await FETCH_POST(`api/sgis`, {
      url: `https://sgisapi.kostat.go.kr/OpenAPI3/auth/authentication.json?consumer_key=436c25ed8c9541ff99ca&consumer_secret=b7ca6ac1bac64ac6a261`,
    }).then((res) => setAccessKey(res.result.accessToken));
  };
  const fetchStates = async () => {
    await FETCH_POST(`api/sgis`, {
      url: `https://sgisapi.kostat.go.kr/OpenAPI3/addr/stage.json?accessToken=${accessKey}`,
    }).then((res) => setStatesList(res.result));
  };

  const fetchCity = async () => {
    await FETCH_POST(`api/sgis`, {
      url: `https://sgisapi.kostat.go.kr/OpenAPI3/addr/stage.json?accessToken=${accessKey}&cd=${11}`,
    }).then((res) => console.log(res));
  };

  useEffect(() => {
    if (!statesList) return;
    console.log(statesList);

    fetchCity();
  }, [statesList]);

  useEffect(() => {
    if (accessKey) {
      fetchStates();
    }
  }, [accessKey]);

  useEffect(() => {
    fetchAccessKey();
  }, []);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(userInfoChangeEmail("new-email"));
  }, []);

  return <></>;
};

export default Cities;
