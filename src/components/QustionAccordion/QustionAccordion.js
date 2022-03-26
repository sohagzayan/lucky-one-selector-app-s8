import React from "react";
import { Accordion } from "react-bootstrap";
import "./QustionAccordion.css";

const QustionAccordion = () => {
  return (
    <Accordion className="AccordionWrapper" defaultActiveKey={["0"]} alwaysOpen>
      <Accordion.Item className="AccordionQustionBody" eventKey="0">
        <Accordion.Header className="AccordionQustionHeader">
          1. How does React work ?
        </Accordion.Header>
        <Accordion.Body>
          React হল ফেসবুক দ্বারা তৈরি, মোবাইল এবং ওয়েব অ্যাপ্লিকেশন
          ডেভেলপমেন্টের জন্য সবচেয়ে জনপ্রিয় জাভাস্ক্রিপ্ট লাইব্রেরিগুলির মধ্যে
          একটি। React ব্যবহার করার সবচেয়ে বড় সুবিধা হল react Javascript সাথে
          HTML কোড যোগ করতে পারে। এবং react virsual Dom দ্বারা নিজের কাজ করে
          থাকে, Virtual Dom হচ্ছে মুলত original Dom এর একটা copy যা সে মেমোরিতে
          রেখে দেয় । এবং reallDom এর মতো library দ্বারা আসল Dom এর সাথে তুলনা
          করা হয় । । Virtual Dom RealDom এর মতোই একোই বিশিষ্ট রয়েছে কিন্তু
          সরাসরি কিছু পরিবর্তন করার ability নেই । Virtual Dom যখন মুলত কোন
          update থাকে তখন virsual Dom আগে নেওয়া update এর সাথে নতুন হোওয়া
          update এর তুলনা করে । আর এই প্রক্রিয়া করার পর যত টুকু জিনিস update
          হয়েছে শুধু ততটুকুই rerander করে । আর React এই সবটুকু প্রকৃয়া করে
          diffing algorithm এর মাধ্যমে । একবার প্রতিক্রিয়া জানতে পারে কোন
          উপাদানগুলি আপডেট করা হয়েছে, তারপর এটি আপডেট করা DOM নোডের সাথে আসল
          DOM নোডগুলিকে প্রতিস্থাপন করে etc.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item className="AccordionQustionBody" eventKey="1">
        <Accordion.Header>
          2. What is the difference between state and props?
        </Accordion.Header>
        <Accordion.Body>
          props এবং State উভয়ই প্লেইন জাভাস্ক্রিপ্ট অবজেক্ট। But তারা উপাদানের
          সাপেক্ষে তাদের কার্যকারিতায় ভিন্ন | State হচ্ছে এমন একটি জিনিস যেইটা
          change হতে পারে । বিভিন্ন action এর ভিত্তি করে এটি পরিবর্তন হতে পারে ।
          এবং props হচ্ছে data পাঠায় । আর props কে পরিবর্তন করা যায় না । শুধু
          read করা যায় ।
          <div className="deffarance">
            <ul className="props">
              <li>
                <h3>Props</h3>
              </li>
              <li>ডেটা এক উপাদান থেকে অন্য উপাদানে প্রেরণ করা হয়।</li>
              <li>Props কখনো পরিবর্তন করা যাবে না । এটি অপরিবর্তনীয়।</li>
              <li>
                Props বিভিন্ন state এবং functional component এর সাথে use করা
                যেতে পারে ।
              </li>
              <li>Props শুধু মাত্র read করা যায়</li>
            </ul>
            <ul>
              <li>
                <h2>State</h2>
              </li>
              <li>State তথ্য শুধুমাত্র component এর মধ্যে পাস করা হয়.</li>
              <li>এটি পরিবর্তন করা যায় । অথাত এটি পরিবর্তনশীল</li>
              <li>
                State শুধু মাত্র ব্যবহার করা যাবে State Components আর class
                Components এর সাথে
              </li>
              <li>State কে read এবং write দুইটাই করা যায়</li>
            </ul>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item className="AccordionQustionBody" eventKey="2">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          স্টেট হল একটি প্লেইন জাভাস্ক্রিপ্ট অবজেক্ট যা কম্পোনেন্টের বর্তমান
          পরিস্থিতি সম্পর্কে একটি তথ্য উপস্থাপন করতে প্রতিক্রিয়া দ্বারা ব্যবহৃত
          হয়।
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default QustionAccordion;
