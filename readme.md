Answars:

1. ans....

 getElimentById এটা দিয়ে একটা নির্দিষ্ট ID দিয়ে একটিমাত্র element রিটার্ন করে কারন ID ইউনিক থাকে তাই একটা element রিটার্ন করে আর তা না হলে null রিটার্ন করে।

getElementByClassName এটা দিয়ে একি নামের সকল class কে একটি লাইভ HTMLCollection দেয় এবং যদি নতুন কোন element যোগ করা হয় তাহলে এটা নিজেথেকেই আপডেট হয়। 

querySelector এটা দিয়ে বিভিন্ন CSS সিলেক্টর ব্যাবহার করে এবং এর সাথে যেটা প্রথম মিলে যায় সেটাই আবার রিটার্ন করে ।

querySelectorAll এটা দিয়ে একি রকম element গুলোকে একসাথে একটা স্টাটিক NodeList হিসাবে দেখায় এবং নতুন কোন eliment যদি যুক্ত হয় তাহলে এটা একা একাই আপডেট হয়ে যায়।

2. ans....

document.createElement ট্যাগনেম দিয়ে DOM এ নতুন element creat করা হয় এবং element.textContent বা element.innerHTML দিয়ে DOM-এ নতুন element সংযুক্ত করা হয় ।

3. ans....

Event Bubbling হলো যখন একটা element এ কোন কিছু ঘটে তখন এইটা সেই element কে হিট করে এর পরে এটা আবার parent , grandparent এ যায় এইভাবে করতে করতে এইটা একদম উপরের যাইতে থাকে। 

4. ans....

