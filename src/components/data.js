import { GiSmartphone } from "react-icons/gi";
import { FaTabletAlt } from "react-icons/fa";
import { IoTvSharp } from "react-icons/io5";
import { FaLaptop } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { BsHeadsetVr } from "react-icons/bs";

const devices = [
  {
    device: "Smartphones",
    caption:
      "Enjoy seamless streaming on Android and iOS devices. Download our app from the Google Play Store or the Apple App Store.",
    icon: GiSmartphone,
  },
  {
    device: "Tablet",
    caption:
      "Watch your favorite movies and shows on Android and iOS tablets. Get our app from the Google Play Store or the Apple App Store.",
    icon: FaTabletAlt,
  },
  {
    device: "VR Headsets",
    caption:
      "Experience entertainment like never before with VR compatibility. Download our app and dive into virtual streaming.",
    icon: BsHeadsetVr,
  },
  {
    device: "Smart TV",
    caption:
      "Stream directly on your Smart TV for an immersive viewing experience. Available on major app stores.",
    icon: IoTvSharp,
  },
  {
    device: "Laptops",
    caption:
      "Access your content anytime on Windows and macOS laptops. Stream directly from your browser or our desktop app.",
    icon: FaLaptop,
  },
  {
    device: "Gaming Consoles",
    caption:
      "Enjoy entertainment on PlayStation, Xbox, and more. Stream effortlessly from your console’s app store.",
    icon: IoGameController,
  },
];

export const questions = [
  {
    id: 1,
    num: "01",
    question: "What is StreamVibe?",
    answer:
      "StreamVibe is a premium streaming service that lets you watch movies, TV shows, and exclusive content on-demand across multiple devices.",
  },
  {
    id: 2,
    num: "02",
    question: "How much does StreamVibe cost?",
    answer:
      "StreamVibe offers flexible subscription plans starting at [insert price]. Choose from monthly or yearly options to fit your needs. Visit our pricing page for details.",
  },
  {
    id: 3,
    num: "03",
    question: "What content is available on StreamVibe?",
    answer:
      "StreamVibe offers a vast library of movies, TV shows, and exclusive originals across various genres, including action, drama, comedy, and more.",
  },
  {
    id: 4,
    num: "04",
    question: "How can I watch StreamVibe?",
    answer:
      "You can watch StreamVibe on your smartphone, tablet, Smart TV, laptop, gaming console, or VR headset. Simply download our app or stream directly from your browser.",
  },
  {
    id: 5,
    num: "05",
    question: "How do I sign up for StreamVibe?",
    answer:
      "Signing up is easy! Visit our website, choose a subscription plan, and create an account. You’ll be streaming in minutes.",
  },
  {
    id: 6,
    num: "06",
    question: "What is the StreamVibe free trial?",
    answer:
      "StreamVibe offers a [number]-day free trial for new users, allowing you to explore our content before committing to a subscription.",
  },
  {
    id: 7,
    num: "07",
    question: "How do I contact StreamVibe customer support?",
    answer:
      "Our support team is available 24/7. You can reach us via live chat, email, or our help center on the website.",
  },
  {
    id: 8,
    num: "08",
    question: "What are the StreamVibe payment methods?",
    answer:
      "We accept major credit cards, debit cards, PayPal, and other secure payment options. Check our payment page for more details.",
  },
];

export const planes = [
  [
    {
      planTitle: "Basic Plan",
      planCaption:
        "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
      price: 9.99,
      planTime : "month",
    },
    {
      planTitle: "Standard Plan",
      planCaption:
        "Access to a wider selection of movies and shows, including most new releases and exclusive content",
      price: 12.99,
      planTime : "month",
    },
    {
      planTitle: "Premium Plan",
      planCaption:
        "Access to a widest selection of movies and shows, including all new releases and Offline Viewing",
      price: 14.99,
      planTime : "month",
    },
  ],
  [
    {
      planTitle: "Basic Plan",
      planCaption:
        "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles, and more!",
      price: 139.99,
      planTime : "year",
    },
    {
      planTitle: "Standard Plan",
      planCaption:
        "Access to a wider selection of movies and shows, including most new releases and exclusive content & All access.",
      price: 249.99,
      planTime : "year",
    },
    {
      planTitle: "Premium Plan",
      planCaption:
        "Access to a widest and large selection of movies and shows, including all new releases and Offline Viewing",
      price: 349.99,
      planTime : "year",
    },
  ],
];

export default devices;
