import React from "react";
import {
  Image,
  ImageBackground,
  ImageSourcePropType,
  Text,
  View,
} from "react-native";

interface Props {
  backgroundImage: ImageSourcePropType;
  backgroundColor: string;
  title: string;
  flexDirection?: "row" | "row-reverse"; // optional prop
  icon?: ImageSourcePropType;
}

const FootCard = ({
  backgroundImage,
  backgroundColor,
  title,
  icon,
  flexDirection = "row", // default value
}: Props) => {
  return (
    <View
      className="justify-between mt-8"
      style={{
        backgroundColor,
        borderRadius: 20,
        flexDirection, // ✅ use the prop here
        alignItems: "center",
      }}
    >
      <ImageBackground
        source={backgroundImage}
        resizeMode="contain"
        style={{ width: 300, height: 200 }}
      >
        <Text
          style={{
            color: "white",
            width: 160,
            fontSize: 30,
            fontWeight: "bold",
            position: "absolute",
            top: 70,
            [flexDirection === "row" ? "right" : "left"]:
              flexDirection === "row" ? -110 : -80,
          }}
        >
          {title}
        </Text>

        {icon && (
          <Image
            source={icon}
            className="text-white"
            style={{
              width: 33,
              height: 16,
              position: "absolute",
              top: 115,
              [flexDirection === "row" ? "right" : "left"]:
                flexDirection === "row" ? 15 : -80,
            }}
          />
        )}
      </ImageBackground>
    </View>
  );
};

export default FootCard;
// import React from "react";
// import {
//   Image,
//   ImageBackground,
//   ImageSourcePropType,
//   Text,
//   View,
// } from "react-native";

// interface Props {
//   backgroundImage: ImageSourcePropType;
//   backgroundColor: string;
//   title: string;
//   flexDirection?: "row" | "row-reverse";
//   icon?: ImageSourcePropType;
// }

// const FootCard = ({
//   backgroundImage,
//   backgroundColor,
//   title,
//   icon,
//   flexDirection = "row",
// }: Props) => {
//   return (
//     <View
//       className="justify-between mt-8"
//       style={{
//         backgroundColor,
//         borderRadius: 20,
//         flexDirection,
//         alignItems: "center",
//       }}
//     >
//       <ImageBackground
//         source={backgroundImage}
//         resizeMode="contain"
//         style={{ width: 300, height: 200 }}
//       >
//         <Text
//           style={{
//             color: "white",
//             width: 160,
//             fontSize: 30,
//             fontWeight: "bold",
//             position: "absolute",
//             top: 70,

//           }}
//         >
//           {title}
//         </Text>

//         {icon && (
//           <Image
//             source={icon}
//             style={{
//               width: 33,
//               height: 16,
//               position: "absolute",
//               top: 115,
//               right: 15,
//             }}
//           />
//         )}
//       </ImageBackground>
//     </View>
//   );
// };

// export default FootCard;
