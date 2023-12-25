import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SvgXml } from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";

const Login = () => {
  const navigation = useNavigation();
  const logo = `<svg width="60" height="72" viewBox="0 0 60 72" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M59.1639 37.6902C59.1658 36.9832 59.0082 36.2849 58.7027 35.6472C58.3973 35.0096 57.9519 34.4491 57.3998 34.0074L38.6385 19.0061L38.3424 16.5853C38.2246 15.5137 38.0353 14.4512 37.7758 13.4048C36.9663 9.74788 35.253 6.35225 32.7925 3.52838C30.2172 0.695517 27.101 -0.502001 24.1909 0.180462C21.2808 0.862925 19.0402 3.32237 18.023 7.08235C17.0953 10.7023 17.0953 14.4977 18.023 18.1176C18.2545 19.1105 18.5514 20.0869 18.9115 21.0407L2.71264 34.0074C1.74686 34.791 1.13102 35.9255 1.00004 37.1622C0.883616 38.1852 1.11007 39.2178 1.64387 40.0981L2.04305 40.6003L2.4036 41.051C3.27439 41.8812 4.43248 42.3426 5.63564 42.3386H7.91481V66.0188C7.91819 67.4841 8.50087 68.8885 9.53574 69.9258C10.5706 70.9631 11.9737 71.549 13.4389 71.5558H46.5706C48.037 71.549 49.4414 70.9635 50.4783 69.9266C51.5152 68.8897 52.1007 67.4852 52.1075 66.0188V42.3386H54.3867C55.0056 42.3472 55.6201 42.2337 56.1952 42.0047C56.7702 41.7757 57.2945 41.4356 57.7382 41.0039C58.1818 40.5723 58.536 40.0575 58.7807 39.4889C59.0253 38.9203 59.1555 38.3091 59.1639 37.6902ZM26.3413 15.1303L23.3411 17.5768C23.3411 17.3708 23.2509 17.1648 23.1865 16.933C22.7597 15.2069 22.5691 13.4309 22.62 11.6536C22.62 11.4218 22.62 11.2544 22.62 11.1643C22.6807 10.3146 22.8274 9.47335 23.0578 8.65331C23.56 6.85058 24.4098 5.69167 25.3756 5.44701C25.5126 5.43374 25.6506 5.43374 25.7876 5.44701C27.0249 5.62616 28.1408 6.28826 28.8909 7.28837C30.6861 9.37816 31.9418 11.8762 32.5479 14.5637C31.5618 14.0764 30.4601 13.8714 29.3647 13.9714C28.2693 14.0714 27.2229 14.4725 26.3413 15.1303Z" fill="#343434"/>
  <path d="M28.4014 59.5803H21.6025V52.8973H28.4529V59.5803H28.4014ZM28.4014 42.7119H21.6025V49.3949H28.4529V42.7119H28.4014ZM38.5997 52.8973H31.7493V59.5803H38.5869V52.8973H38.5997ZM38.5997 42.7119H31.7493V49.3949H38.5869V42.7119H38.5997Z" fill="white"/>
  <path d="M57.3998 34.0074L38.6385 19.0061L38.3424 16.5853C38.2246 15.5137 38.0353 14.4512 37.7758 13.4048C36.9663 9.74788 35.253 6.35225 32.7925 3.52838C30.2172 0.695517 27.101 -0.502001 24.1909 0.180462C21.2808 0.862925 19.0402 3.32237 18.023 7.08235C17.0953 10.7023 17.0953 14.4977 18.023 18.1176C18.2545 19.1105 18.5514 20.0869 18.9115 21.0407L2.71264 34.0074C1.74686 34.791 1.13102 35.9255 1.00004 37.1622C0.883616 38.1852 1.11007 39.2178 1.64387 40.0981L2.04305 40.6003L2.4036 41.051C3.27439 41.8812 4.43248 42.3426 5.63564 42.3386H7.91481V66.0188C7.91819 67.4841 8.50087 68.8885 9.53574 69.9258C10.5706 70.9631 11.9737 71.549 13.4389 71.5558H46.5706C48.037 71.549 49.4414 70.9635 50.4783 69.9266C51.5152 68.8897 52.1007 67.4852 52.1075 66.0188V42.3386H54.3867C55.6344 42.3386 56.8312 41.8439 57.7146 40.9628C58.5981 40.0818 59.0961 38.8864 59.0995 37.6387C59.1015 36.9455 58.9502 36.2605 58.6563 35.6327C58.3625 35.0049 57.9334 34.4499 57.3998 34.0074ZM22.6328 11.0741C22.6936 10.2245 22.8402 9.38321 23.0706 8.56316C23.5728 6.76043 24.4227 5.60152 25.3884 5.35687C25.5255 5.3436 25.6635 5.3436 25.8005 5.35687C27.0378 5.53601 28.1536 6.19814 28.9038 7.19824C30.699 9.28804 31.9546 11.786 32.5607 14.4735C31.5536 14.0036 30.4352 13.8245 29.3317 13.9564C28.2281 14.0884 27.1835 14.5262 26.3156 15.2204L23.3411 17.5768C23.3411 17.3708 23.2509 17.1648 23.1865 16.933C22.7597 15.2069 22.5691 13.4309 22.62 11.6536C22.62 11.4218 22.62 11.2544 22.62 11.1643L22.6328 11.0741ZM49.5193 37.1236C48.8424 37.143 48.1986 37.4206 47.7198 37.8994C47.241 38.3783 46.9634 39.0221 46.944 39.6989V66.0188C46.944 66.0871 46.9168 66.1526 46.8685 66.2009C46.8202 66.2492 46.7547 66.2764 46.6864 66.2764H13.5162C13.4813 66.2781 13.4464 66.2727 13.4136 66.2606C13.3809 66.2484 13.351 66.2297 13.3257 66.2056C13.3004 66.1816 13.2802 66.1526 13.2665 66.1204C13.2528 66.0883 13.2457 66.0538 13.2457 66.0188V39.6861C13.2263 39.0092 12.9487 38.3654 12.4699 37.8866C11.9911 37.4077 11.3473 37.1302 10.6704 37.1107H7.43837L21.4224 25.8565C21.9248 26.5993 22.4799 27.3051 23.0835 27.9683C23.5337 28.459 24.0201 28.9153 24.5386 29.3332L24.6802 29.4491V29.5392C24.6802 29.6165 24.6802 29.7324 24.6802 29.874C24.6802 30.0157 24.6802 30.0543 24.6802 30.1573C24.6802 30.2603 24.7446 30.4406 24.7832 30.608C24.8399 30.8263 24.9087 31.0412 24.9893 31.2518C25.3962 32.2579 26.0938 33.1198 26.9928 33.7276C27.8919 34.3354 28.9517 34.6615 30.0369 34.6642C30.7535 34.6686 31.4639 34.5309 32.127 34.2591C32.7901 33.9872 33.3927 33.5866 33.8999 33.0803C34.4096 32.575 34.8134 31.9731 35.0876 31.3097C35.3617 30.6464 35.5008 29.9351 35.4966 29.2173C35.5001 28.4997 35.3607 27.7886 35.0866 27.1253C34.8124 26.4621 34.409 25.8601 33.8999 25.3543C33.3935 24.8469 32.7911 24.4455 32.1278 24.1736C31.4646 23.9017 30.7537 23.7646 30.0369 23.7705C28.9064 23.769 27.8037 24.1201 26.8821 24.7749C26.311 24.1046 25.7943 23.3898 25.3369 22.6373L29.6249 19.1864C29.7435 19.0857 29.8941 19.0304 30.0498 19.0304C30.2054 19.0304 30.356 19.0857 30.4747 19.1864L52.8157 37.0721L49.5193 37.1236Z" fill="#308DFF"/>
  </svg>
  `;
  const user = `<svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path id="Vector" d="M17.2883 15.7022C16.0165 13.5034 14.0565 11.9267 11.7691 11.1793C12.9006 10.5057 13.7796 9.47942 14.2713 8.25793C14.763 7.03644 14.8401 5.68732 14.4908 4.41776C14.1415 3.1482 13.3851 2.02839 12.3378 1.23031C11.2905 0.43223 10.0102 0 8.69345 0C7.37672 0 6.09639 0.43223 5.04908 1.23031C4.00178 2.02839 3.2454 3.1482 2.89612 4.41776C2.54683 5.68732 2.62395 7.03644 3.11562 8.25793C3.6073 9.47942 4.48634 10.5057 5.61777 11.1793C3.33042 11.9259 1.37043 13.5026 0.0985725 15.7022C0.0519311 15.7783 0.0209942 15.8629 0.00758706 15.9511C-0.00582004 16.0393 -0.00142575 16.1293 0.0205107 16.2158C0.0424471 16.3022 0.0814814 16.3834 0.13531 16.4546C0.189139 16.5257 0.256672 16.5854 0.333925 16.63C0.411178 16.6746 0.496586 16.7033 0.58511 16.7144C0.673634 16.7255 0.76348 16.7187 0.849348 16.6945C0.935216 16.6703 1.01537 16.6291 1.08507 16.5735C1.15477 16.5178 1.21262 16.4487 1.25519 16.3703C2.82852 13.6512 5.60942 12.0278 8.69345 12.0278C11.7775 12.0278 14.5584 13.6512 16.1317 16.3703C16.1743 16.4487 16.2321 16.5178 16.3018 16.5735C16.3715 16.6291 16.4517 16.6703 16.5376 16.6945C16.6234 16.7187 16.7133 16.7255 16.8018 16.7144C16.8903 16.7033 16.9757 16.6746 17.053 16.63C17.1302 16.5854 17.1978 16.5257 17.2516 16.4546C17.3054 16.3834 17.3445 16.3022 17.3664 16.2158C17.3883 16.1293 17.3927 16.0393 17.3793 15.9511C17.3659 15.8629 17.335 15.7783 17.2883 15.7022ZM4.01688 6.01501C4.01688 5.09008 4.29115 4.18591 4.80502 3.41685C5.31889 2.64779 6.04927 2.04838 6.9038 1.69442C7.75834 1.34046 8.69864 1.24785 9.60581 1.4283C10.513 1.60874 11.3463 2.05414 12.0003 2.70817C12.6543 3.36221 13.0997 4.19549 13.2802 5.10266C13.4606 6.00983 13.368 6.95013 13.014 7.80466C12.6601 8.6592 12.0607 9.38958 11.2916 9.90345C10.5226 10.4173 9.61839 10.6916 8.69345 10.6916C7.45356 10.6903 6.26482 10.1971 5.38808 9.32039C4.51134 8.44365 4.0182 7.25491 4.01688 6.01501Z" fill="#6A6A6A"/>
  </svg>
  `;
  const password = `<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path id="Vector" d="M17.3901 2.20914L18.0398 1.56857C18.2122 1.39625 18.309 1.16254 18.309 0.918845C18.309 0.675152 18.2122 0.44144 18.0398 0.269123C17.8675 0.0968065 17.6338 0 17.3901 0C17.1464 0 16.9127 0.0968065 16.7404 0.269123L15.4593 1.55942L12.8695 4.14915L7.09524 9.91428C6.14907 9.29003 5.00485 9.03923 3.88431 9.21047C2.76377 9.38171 1.74668 9.9628 1.03013 10.8411C0.313576 11.7195 -0.0514261 12.8325 0.0058485 13.9646C0.0631231 15.0968 0.538597 16.1673 1.34014 16.9688C2.14168 17.7704 3.21222 18.2458 4.34432 18.3031C5.47642 18.3604 6.58948 17.9954 7.46783 17.2788C8.34617 16.5623 8.92726 15.5452 9.0985 14.4247C9.26974 13.3041 9.01894 12.1599 8.39469 11.2137L13.5101 6.08916L15.4501 8.03833C15.5354 8.12305 15.6366 8.19014 15.7479 8.23576C15.8591 8.28138 15.9783 8.30464 16.0985 8.30421C16.2187 8.30379 16.3377 8.27969 16.4486 8.23328C16.5596 8.18687 16.6603 8.11907 16.745 8.03375C16.8297 7.94843 16.8968 7.84725 16.9424 7.736C16.988 7.62475 17.0113 7.50561 17.0109 7.38537C17.0104 7.26513 16.9863 7.14615 16.9399 7.03523C16.8935 6.9243 16.8257 6.82361 16.7404 6.73888L14.8004 4.79887L16.0998 3.50858L16.7404 4.14915C16.8251 4.23447 16.9258 4.30227 17.0367 4.34868C17.1477 4.39508 17.2666 4.41919 17.3869 4.41961C17.5071 4.42004 17.6263 4.39678 17.7375 4.35115C17.8488 4.30553 17.9499 4.23845 18.0353 4.15372C18.1206 4.069 18.1884 3.96831 18.2348 3.85738C18.2812 3.74646 18.3053 3.62748 18.3057 3.50724C18.3062 3.387 18.2829 3.26785 18.2373 3.1566C18.1917 3.04535 18.1246 2.94418 18.0398 2.85886L17.3901 2.20914ZM4.57872 16.4756C4.03575 16.4756 3.50497 16.3145 3.05351 16.0129C2.60205 15.7112 2.25018 15.2825 2.04239 14.7808C1.83461 14.2792 1.78024 13.7272 1.88617 13.1947C1.9921 12.6621 2.25356 12.173 2.6375 11.789C3.02143 11.4051 3.5106 11.1436 4.04314 11.0377C4.57567 10.9318 5.12766 10.9861 5.6293 11.1939C6.13094 11.4017 6.5597 11.7536 6.86135 12.205C7.16301 12.6565 7.32402 13.1873 7.32402 13.7303C7.32402 14.4584 7.03478 15.1566 6.51994 15.6715C6.0051 16.1863 5.30682 16.4756 4.57872 16.4756Z" fill="#6A6A6A"/>
  </svg>
  `;
  const google = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="Group 1437">
  <path id="Vector" d="M19.6434 8.10525H18.8625V8.06501H10.1371V11.943H15.6161C14.8168 14.2004 12.6689 15.8209 10.1371 15.8209C6.92464 15.8209 4.3201 13.2164 4.3201 10.004C4.3201 6.79158 6.92464 4.18705 10.1371 4.18705C11.6199 4.18705 12.9689 4.74644 13.9961 5.66019L16.7383 2.91798C15.0068 1.30426 12.6907 0.309082 10.1371 0.309082C4.78304 0.309082 0.442139 4.64998 0.442139 10.004C0.442139 15.358 4.78304 19.6989 10.1371 19.6989C15.4911 19.6989 19.832 15.358 19.832 10.004C19.832 9.35395 19.7651 8.71942 19.6434 8.10525Z" fill="#616161"/>
  <path id="Vector_2" d="M10.137 19.699C12.6412 19.699 14.9166 18.7406 16.637 17.1822L13.6364 14.6431C12.6303 15.4082 11.401 15.822 10.137 15.821C7.61535 15.821 5.47423 14.2131 4.66761 11.9692L1.5061 14.4051C3.11061 17.5448 6.36907 19.699 10.137 19.699Z" fill="#616161"/>
  <path id="Vector_3" d="M19.6433 8.10518H18.8624V8.06494H10.137V11.9429H15.616C15.2337 13.0173 14.5449 13.9561 13.6349 14.6434L13.6363 14.6425L16.6369 17.1816C16.4246 17.3745 19.8319 14.8514 19.8319 10.0039C19.8319 9.35388 19.765 8.71935 19.6433 8.10518Z" fill="#616161"/>
  <path id="Vector_4" d="M1.55981 5.4915L4.74508 7.82749C5.60696 5.69364 7.69427 4.18705 10.1369 4.18705C11.6197 4.18705 12.9688 4.74644 13.996 5.66019L16.7382 2.91798C15.0067 1.30426 12.6905 0.309082 10.1369 0.309082C6.41309 0.309082 3.18371 2.41142 1.55981 5.4915Z" fill="#616161"/>
  </g>
  </svg>
  `;
  const apple = `<svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path id="Vector" d="M14.4431 18.921C13.3876 19.9442 12.2351 19.7826 11.1257 19.2979C9.95173 18.8025 8.87465 18.7809 7.63601 19.2979C6.08502 19.9657 5.26644 19.7719 4.34015 18.921C-0.91598 13.5033 -0.140485 5.25286 5.82652 4.95128C7.28058 5.02668 8.29303 5.74832 9.14392 5.81294C10.4149 5.55445 11.632 4.81126 12.9891 4.9082C14.6155 5.03745 15.8433 5.68369 16.6511 6.84694C13.2907 8.86107 14.0877 13.2879 17.1681 14.5265C16.5542 16.1421 15.7572 17.747 14.4324 18.9317L14.4431 18.921ZM9.03621 4.88666C8.87465 2.48478 10.8242 0.502956 13.0645 0.309082C13.3768 3.08794 10.5441 5.15593 9.03621 4.88666Z" fill="#616161"/>
  </svg>
  `;
  const facebook = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="Group 1431">
  <g id="Group 1402">
  <circle id="Ellipse 4" cx="9.86288" cy="10.004" r="9.69491" fill="#616161"/>
  <path id="Vector" d="M10.9378 16.4154V10.8375H12.8102L13.0905 8.66367H10.9378V7.27573C10.9378 6.64635 11.1126 6.21744 12.0152 6.21744L13.1663 6.21694V4.2727C12.9671 4.2462 12.2839 4.18701 11.4889 4.18701C9.82924 4.18701 8.69303 5.20006 8.69303 7.06052V8.66367H6.81592V10.8375H8.69303V16.4154H10.9378Z" fill="#F9FBFF"/>
  </g>
  </g>
  </svg>
  `;
  const line = `<svg width="99" height="2" viewBox="0 0 99 2" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path id="Rectangle 3" d="M0.5 0.809082L98.5 0.309082V1.30908L0.5 0.809082Z" fill="url(#paint0_linear_385_2386)" fill-opacity="0.75"/>
  <defs>
  <linearGradient id="paint0_linear_385_2386" x1="98.5" y1="1.30927" x2="6" y2="1.30921" gradientUnits="userSpaceOnUse">
  <stop stop-color="#616161"/>
  <stop offset="1" stop-color="#616161" stop-opacity="0"/>
  </linearGradient>
  </defs>
  </svg>
  `;
  const line1 = `<svg width="99" height="2" viewBox="0 0 99 2" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path id="Rectangle 4" d="M0.5 0.309082L98.5 0.809082L0.5 1.30908V0.309082Z" fill="url(#paint0_linear_385_2388)" fill-opacity="0.75"/>
  <defs>
  <linearGradient id="paint0_linear_385_2388" x1="0.5" y1="1.30913" x2="104" y2="0.309076" gradientUnits="userSpaceOnUse">
  <stop stop-color="#616161"/>
  <stop offset="1" stop-color="#616161" stop-opacity="0"/>
  </linearGradient>
  </defs>
  </svg>
  `
  const handleSignIn = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <SvgXml xml={logo} height={70} width={70} />
        <Text
          style={{
            color: "black",
            fontSize: 35,
            fontWeight: "bold",
            top: 6,
          }}
        >
          Gharr<Text style={{ color: "#006EFF" }}>For</Text>.Sale
        </Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.label1}>Sign In</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username</Text>
          <View style={styles.inputBox}>
            <SvgXml xml={user} />
            <TextInput
              style={styles.input}
              placeholder="Username"
              placeholderTextColor="#a0a0a0"
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.inputBox}>
            <SvgXml xml={password} />
            <TextInput
              style={styles.input}
              placeholder="•••••••••"
              placeholderTextColor="#a0a0a0"
              secureTextEntry={true}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
          <Text style={styles.signInButtonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.separatorContainer}>
        <SvgXml xml={line} width={130} marginTop={42} left={10} />
        <Text style={styles.separatorText}>or continue with</Text>
        <SvgXml xml={line1} width={130} marginTop={42} left={-10} />

      </View>
      <View style={styles.socialIconsContainer}>
        <SvgXml xml={google} width={30} height={30} />
        <SvgXml xml={apple} width={30} height={30} />
        <SvgXml xml={facebook} width={30} height={30} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  title: {
    flexDirection: "row",
    marginTop: 40,
    alignItems: "flex-end",
    justifyContent: "center",
    left: -7,
  },
  blueText: {
    color: "blue",
  },
  formContainer: {
    marginTop: 40,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label1:{
      color: "#091130",
      fontFamily: "Poppins",
      fontSize: 18,
      fontWeight: "800",
      fontStyle: "normal",
      lineHeight: 22,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 20,
    paddingTop:20,
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 15,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    paddingLeft: 10,
  },
  signInButton: {
    backgroundColor: "#006EFF",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
  },
  signInButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  socialIconsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap:30,
    marginTop: 30,
  },
  separatorContainer: {
    flexDirection: "row",
  },
  separatorText: {
    textAlign: "center",
    fontSize: 16,
    top: 30,
    color: "#616161",
  },
});

export default Login;
