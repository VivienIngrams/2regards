import React, { useRef, FormEvent } from "react";

export default function NewsLetterSignUpForm(): JSX.Element {
  async function subscribeUser(event: any) {
    event.preventDefault();

    const formData = new FormData(event.target);
    try {
      const response = await fetch("/api", {
        method: "post",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`response status: ${response.status}`);
      }
      const responseData = await response.json();
     
      alert("You have successfully subscribed to our newsletter!");
      console.log(responseData);
    } catch (err) {
      console.error(err);
      alert("Error, please try resubmitting your email.");
    }
  }

  return (
    <form onSubmit={subscribeUser} className="relative flex flex-col items-end">
      <label htmlFor="email" />
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Your email here"
        // ref={inputRef}
        required
        autoCapitalize="off"
        autoCorrect="off"
        className="w-full sm:w-[400px] h-8 p-2 border font-italiana border-neutral-400 rounded my-2"
      />
      <button
        value=""
        name="subscribe"
        type="submit"
        className="bg-white  font-italiana text-black h-8 px-4  rounded "
      >
        Subscribe to our newsletter
      </button>
    </form>
  );
}
