import { useRouter } from "next/router";
import { submitPost } from "../CommunityWrite.queries";
import { useEffect, useState } from "react";

export function useSubmitPost(type) {
  const router = useRouter();
  const [postData, setPostData] = useState({
    title: "",
    type: "",
    content: "",
    images: [],
  });

  useEffect(() => {
    if (type) {
      setPostData((prevData) => ({ ...prevData, type: type.toUpperCase() }));
    }
  }, [type]);

  const submitPostData = async (postData) => {
    const data = await submitPost(postData);
    if (data.success) {
      router.push(`/community/${type}/${data.result.id}`);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData((prevData) => ({ ...prevData, [name]: value }));
    console.log("postData: ", postData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitPostData(postData);
  };

  return { handleChange, handleSubmit };
}
