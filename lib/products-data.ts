export interface Product {
  id: string
  name: string
  category: string
  description: string
  fullDescription?: string
  image: string
  images: string[]
  specifications?: {
    label: string
    value: string
  }[]
  features?: string[]
}

export const products: Product[] = [
  {
    id: "msp650",
    name: "MSP650",
    category: "Product Series 1",
    description:
      "High-performance industrial robot arm for automated part removal on injection molding machines, with precise positioning and high-speed motion.",
    fullDescription:
      "The MSP650 is a high-performance industrial robot arm designed specifically for injection molding machines. Using advanced servo drive technology, it delivers high-speed, high-precision automated part removal. Compact and stable, it significantly improves production efficiency while reducing labor costs.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSP650-%E5%8F%B3%E5%89%8D%E4%BE%A7.png-Eo8BCJNdEnAlJlOH88nVQx5aSbSH9A.jpeg",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSP650-%E5%8F%B3%E5%89%8D%E4%BE%A7.png-Eo8BCJNdEnAlJlOH88nVQx5aSbSH9A.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSP650-%E5%8F%B3%E4%BE%A7.png-6zi03p2YbJDEYmyTRHfuEISDo5RGRL.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSP650-%E5%B7%A6%E4%BE%A7.png-cXNnQAUinxD46fsUb0RugNeb4tS4ni.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSP650-%E6%AD%A3%E5%89%8D%E4%BE%A7.png-F3ZCVCepbWU7b1xfenXILnschTZ6Xc.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSP650-%E6%AD%A3%E5%8F%B3%E4%BE%A7.png-2ud7xHRutDpKCFvWiw11AlCupJzcfy.jpeg",
    ],
    specifications: [
      { label: "Model", value: "MSP650" },
      { label: "Applicable Machine", value: "Injection Molding Machine" },
      { label: "Drive System", value: "Servo Drive" },
    ],
    features: [
      "High-speed precise positioning",
      "Servo drive system",
      "Compact and stable structure",
      "Easy to operate and maintain",
    ],
  },
  {
    id: "msp650v",
    name: "MSP650V",
    category: "Product Series 1",
    description:
      "Upgraded version of the MSP650, with greater load capacity and expandability for more complex injection molding automation.",
    fullDescription:
      "The MSP650V is the upgraded version of the MSP650. While retaining its high-speed, high-precision characteristics, it further improves load capacity and system expandability. It is suited to larger and more complex automated part removal on injection molding machines, meeting diverse production requirements.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSP650V-%E5%8F%B3%E5%89%8D%E4%BE%A7.png-IHGL0vRiOU958V3SnEIVjCb55g5nyQ.jpeg",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSP650V-%E5%8F%B3%E5%89%8D%E4%BE%A7.png-IHGL0vRiOU958V3SnEIVjCb55g5nyQ.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSP650V-%E6%AD%A3%E5%8F%B3%E4%BE%A7.png-Nmp46UbiRYmVRKpukVTgk4w6NunXXu.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSP650V-%E5%8F%B3%E4%BE%A7.png-ELj04VPMTSWLCDEMby5RnIJxa3r3fC.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSP650V-%E5%B7%A6%E4%BE%A7.png-wMe42oocGCDF7FpmIesHbhKsGOUluG.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSP650V-%E6%AD%A3%E5%89%8D%E4%BE%A7.png-MHtQfC0mM7Hm0BcYXYU1CxXWLe9TJm.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSP650V-%E5%90%8E%E4%BE%A7.png-Mnoty7Hz8XG4Do7wjs9vyR5MwI0t6z.jpeg",
    ],
    specifications: [
      { label: "Model", value: "MSP650V" },
      { label: "Applicable Machine", value: "Injection Molding Machine" },
      { label: "Drive System", value: "Servo Drive" },
    ],
    features: [
      "Upgraded high load capacity",
      "Servo drive system",
      "Strong system expandability",
      "Suited to complex applications",
    ],
  },
  {
    id: "msr800is-s3a",
    name: "MSR800IS-S3A",
    category: "Product Series 1",
    description:
      "Large three-axis servo robot arm with an independent control system and mobile base, for efficient automation on large injection molding machines.",
    fullDescription:
      "The MSR800IS-S3A is a large three-axis servo-driven robot arm built on MEROBOT's advanced control technology, with an independent control box and a mobile base design. It offers a larger working range and greater load capacity, suited to automated part removal and handling on large injection molding machines, making it an ideal choice for high-capacity production lines.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR800IS-S3A-%E5%89%8D%E4%BE%A7.png-Rercp5XgZuWll43pQVGIzQGDLcOP4i.jpeg",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR800IS-S3A-%E5%89%8D%E4%BE%A7.png-Rercp5XgZuWll43pQVGIzQGDLcOP4i.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR800IS-S3A-%E5%B7%A6%E4%BE%A7.png-k6BBBrKKvQlwLnrdYiuzsdqw6zpHzC.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR800IS-S3A-%E5%90%8E%E4%BE%A7.png-7bLpfbIKP9kO5binq530RjxqvjSXXR.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR800IS-S3A-%E5%8F%B3%E4%BE%A7.png-mNEQCW0IFugvlsucBu9OC7vKEDVj1v.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR800IS-S3A-%E5%B7%A6%E5%89%8D%E4%BE%A7-CerJoi6ebJjXRUtejIZ2nk8ULyZAVe.png",
    ],
    specifications: [
      { label: "Model", value: "MSR800IS-S3A" },
      { label: "Applicable Machine", value: "Large Injection Molding Machine" },
      { label: "Drive System", value: "Three-Axis Servo Drive" },
      { label: "Control System", value: "MEROBOT" },
    ],
    features: [
      "Three-axis servo drive",
      "Independent control system",
      "Mobile base design",
      "Large working range",
      "High load capacity",
    ],
  },
  {
    id: "msr900is-s3a",
    name: "MSR900IS-S3A",
    category: "Product Series 1",
    description:
      "Upgraded MSR800IS-S3A with a larger working range and stronger performance, for efficient automation on extra-large injection molding machines.",
    fullDescription:
      "The MSR900IS-S3A is the upgraded version of the MSR800IS-S3A. While retaining its three-axis servo drive and MEROBOT control system, it further extends the working range and improves system performance. Equipped with an independent control box (with a dual-fan cooling system) and a mobile base, it suits automated part removal and handling on extra-large injection molding machines.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR900IS-S3A-%E5%89%8D%E4%BE%A7.png-gkIOjek4i7Te38yoq5HtY1dtKqruoV.jpeg",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR900IS-S3A-%E5%89%8D%E4%BE%A7.png-gkIOjek4i7Te38yoq5HtY1dtKqruoV.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR900IS-S3A-%E5%B7%A6%E4%BE%A7.png-qJzS3dQfD8tX0sNfCyh66OXs3QSyZW.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR900IS-S3A-%E5%8F%B3%E4%BE%A7.png-HjksnzYOao5mTofIZGjfQhMAvIIK2a.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR900IS-S3A-%E5%B7%A6%E5%89%8D%E4%BE%A7-IBOiUFy5a6wwUBOv0Pz6MxKnJWCrRD.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR900IS-S3A-%E5%90%8E%E4%BE%A7.png-VgwPbqjNEUtwoAOWna8RsBxtsULPdd.jpeg",
    ],
    specifications: [
      { label: "Model", value: "MSR900IS-S3A" },
      { label: "Applicable Machine", value: "Extra-Large Injection Molding Machine" },
      { label: "Drive System", value: "Three-Axis Servo Drive" },
      { label: "Control System", value: "MEROBOT" },
    ],
    features: [
      "Three-axis servo drive",
      "Independent control system",
      "Dual-fan cooling system",
      "Extra-large working range",
      "Mobile base design",
    ],
  },
  {
    id: "msr900ws-s3a",
    name: "MSR900WS-S3A",
    category: "Product Series 1",
    description:
      "Wide-stroke version of the MSR900 series with a reinforced four-wheel mobile base, for automated part removal on wide molds.",
    fullDescription:
      "The MSR900WS-S3A is the wide-stroke version of the MSR900 series, designed specifically for wide molds. Using the MEROBOT control system and a reinforced four-wheel mobile base, it offers a wider lateral stroke and more stable operation. It suits automated part removal and handling for wide molds in injection molding.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR900WS-S3A-%E6%AD%A3%E5%89%8D%E4%BE%A7.png-7bxj9jG3zgFLIqu6BxTaThiu73qB3D.jpeg",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR900WS-S3A-%E6%AD%A3%E5%89%8D%E4%BE%A7.png-7bxj9jG3zgFLIqu6BxTaThiu73qB3D.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR900WS-S3A-%E5%89%8D%E4%BE%A7.png-0OLHo8oaW5OgF7kehmomZDMHffOzkQ.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR900WS-S3A-%E5%B7%A6%E4%BE%A7.png-T7Uko7vLH2Q3PZecmJ8jLzEZWIaNUV.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR900WS-S3A-%E5%8F%B3%E4%BE%A7.png-mc2mqUB7exOCgyQZeehxT3cznwZjWn.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR900WS-S3A-%E5%B7%A6%E5%89%8D%E4%BE%A7.png-BJWgbXIArJIchR3AvyDS7uMRoLh9ab.jpeg",
    ],
    specifications: [
      { label: "Model", value: "MSR900WS-S3A" },
      { label: "Applicable Machine", value: "Wide-Mold Injection Molding Machine" },
      { label: "Drive System", value: "Three-Axis Servo Drive" },
      { label: "Control System", value: "MEROBOT" },
    ],
    features: [
      "Wide lateral stroke",
      "Three-axis servo drive",
      "Reinforced four-wheel base",
      "MEROBOT control system",
      "High operational stability",
    ],
  },
  {
    id: "msr1100ws-s3a",
    name: "MSR1100WS-S3A",
    category: "Product Series 1",
    description:
      "Upgraded MSR900WS-S3A with a larger working range and stronger load capacity, for automated part removal on extra-large wide molds.",
    fullDescription:
      "The MSR1100WS-S3A is the upgraded version of the MSR900WS-S3A, moving from 900 to 1100, with a larger working range and stronger load capacity. Using the MEROBOT control system, an independent control box (with a cooling fan) and a reinforced four-wheel mobile base, it is designed for injection molding automation on extra-large wide molds.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR1100WS-S3A-%E6%AD%A3%E5%89%8D%E4%BE%A7%20%283%29.png-y0VQith0iElHoeV5XQfbLWnbFiqmhd.jpeg",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR1100WS-S3A-%E6%AD%A3%E5%89%8D%E4%BE%A7%20%283%29.png-y0VQith0iElHoeV5XQfbLWnbFiqmhd.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR1100WS-S3A-%E5%89%8D%E4%BE%A7%20%281%29.png-9Vldbs2YOgtG5hPhDpmHcQJz5uCBSL.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR1100WS-S3A-%E5%B7%A6%E4%BE%A7%20%284%29.png-qBhdXphubji27QH10HH9dad2pLsE4z.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR1100WS-S3A-%E5%8F%B3%E4%BE%A7%20%282%29.png-UlE7gP8qG2LRFjXtxxTYPsWunA60Xu.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR1100WS-S3A-%E5%B7%A6%E5%89%8D%E4%BE%A7%20%285%29.png-uKMaJZP2b19DoZ7ARstAGlCojqtTgT.jpeg",
    ],
    specifications: [
      { label: "Model", value: "MSR1100WS-S3A" },
      { label: "Applicable Machine", value: "Extra-Large Wide-Mold Injection Molding Machine" },
      { label: "Drive System", value: "Three-Axis Servo Drive" },
      { label: "Control System", value: "MEROBOT" },
    ],
    features: [
      "Extra-large working range",
      "Three-axis servo drive",
      "Reinforced four-wheel base",
      "MEROBOT control system",
      "High load capacity",
    ],
  },
  {
    id: "msr1300ws-s3a",
    name: "MSR1300WS-S3A",
    category: "Product Series 1",
    description:
      "Flagship model of the wide-stroke series, with the largest working range and strongest load capacity, for automated part removal on super-large wide molds.",
    fullDescription:
      "The MSR1300WS-S3A is the flagship model of the wide-stroke (WS) series, moving from 1100 to 1300, with the largest working range and strongest load capacity in the series. Using the MEROBOT control system, an independent control box (with a cooling fan) and a reinforced four-wheel mobile base, it is designed for injection molding automation on super-large wide molds, making it the preferred solution for high-end production lines.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR1300WS-S3A-%E5%89%8D%E4%BE%A7%20%285%29.png-ICCmih0ywLtCPIqVqgC5Z4BDiV9FSZ.jpeg",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR1300WS-S3A-%E5%89%8D%E4%BE%A7%20%285%29.png-ICCmih0ywLtCPIqVqgC5Z4BDiV9FSZ.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR1300WS-S3A-%E5%89%8D%E4%BE%A7%20%283%29.png-C68nF2GxY6YzvpfWFxtbSftubvis1N.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR1300WS-S3A-%E5%B7%A6%E4%BE%A7%20%281%29.png-gPvTao1qS8ZKdw0Gk4giiPguHzcy8O.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR1300WS-S3A-%E5%8F%B3%E4%BE%A7%20%284%29.png-vuEPMJOucxMfN9XWxL4JyQvC8sfDiA.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR1300WS-S3A-%E5%B7%A6%E5%89%8D%E4%BE%A7%20%282%29.png-AkhUo7a8eM1KE6wKRYJJw9aj5iKJ7G.jpeg",
    ],
    specifications: [
      { label: "Model", value: "MSR1300WS-S3A" },
      { label: "Applicable Machine", value: "Super-Large Wide-Mold Injection Molding Machine" },
      { label: "Drive System", value: "Three-Axis Servo Drive" },
      { label: "Control System", value: "MEROBOT" },
    ],
    features: [
      "Largest working range",
      "Three-axis servo drive",
      "Reinforced four-wheel base",
      "MEROBOT control system",
      "Strongest load capacity",
    ],
  },
  {
    id: "mst1000ws-s3a",
    name: "MST1000WS-S3A",
    category: "Product Series 1",
    description:
      "MST series wide-stroke three-axis servo robot arm with a dual-fan cooling control box and four-wheel mobile base, for high-precision wide-mold operations.",
    fullDescription:
      "The MST1000WS-S3A is a wide-stroke (WS) three-axis servo robot arm in the MST series, built on ROBOT control technology, with an independent control box (with a dual-fan cooling system) and a four-wheel mobile base. It offers high-precision positioning and a wide lateral stroke, suited to automated part removal for various wide molds in injection molding, making it an ideal choice for mid-to-high-end production lines.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1000WS-S3A-%E5%89%8D%E6%96%B9.png-bKwbdhWGSwwLQ4GECuPPhCE9aYVnYw.jpeg",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1000WS-S3A-%E5%89%8D%E6%96%B9.png-bKwbdhWGSwwLQ4GECuPPhCE9aYVnYw.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1000WS-S3A-%E6%AD%A3%E5%89%8D%E6%96%B9-WMDkKpNpgsJQax0XXEsyLQLbPpwGvd.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1000WS-S3A-%E5%89%8D%E4%BE%A7%E6%96%B9-cs3Go9E0sQ9K01VyNliXoXh7EzOMhI.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1000WS-S3A-%E5%89%8D%20%20%E4%BE%A7%E6%96%B9.png-RxXYuR8J7VfNRC6Vfp6UmXKXeETZ6Y.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1000WS-S3A-%E5%8F%B3%E5%89%8D%E4%BE%A7%E6%96%B9.png-w90TYjYuQm1urUD8BrBu9Tz084lHP4.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1000WS-S3A-%E5%B7%A6%E4%BE%A7-1iFZOaCLSREpTCTXeX0y56ZLSsl8eY.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1000WS-S3A-%E5%90%8E%E9%9D%A2-8j1aqE77NKbGXPxA2faa5HmeBdpq3d.png",
    ],
    specifications: [
      { label: "Model", value: "MST1000WS-S3A" },
      { label: "Applicable Machine", value: "Wide-Mold Injection Molding Machine" },
      { label: "Drive System", value: "Three-Axis Servo Drive" },
      { label: "Control System", value: "ROBOT" },
    ],
    features: [
      "Wide lateral stroke",
      "Three-axis servo drive",
      "Dual-fan cooling system",
      "Four-wheel mobile base",
      "High-precision positioning",
    ],
  },
  {
    id: "mst1200ws-s3a",
    name: "MST1200WS-S3A",
    category: "Product Series 1",
    description:
      "Upgraded MST1000WS-S3A with a larger working range and stronger load capacity, for high-precision automation on larger wide molds.",
    fullDescription:
      "The MST1200WS-S3A is the upgraded version of the MST1000WS-S3A, moving from 1000 to 1200, with a larger working range and stronger load capacity. Using MEROBOT/ROBOT control technology, an independent control box and a four-wheel mobile base, it is designed for injection molding automation on larger wide molds, delivering higher production efficiency.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1200WS-S3A-%E5%89%8D%E6%96%B9.png-4hAHOt1ni7QiZOF0Fj9sPvdJstMRmt.jpeg",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1200WS-S3A-%E5%89%8D%E6%96%B9.png-4hAHOt1ni7QiZOF0Fj9sPvdJstMRmt.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1200WS-S3A-%E5%8F%B3%E5%89%8D%E4%BE%A7%E6%96%B9.png-ot0Zyk6Gmne8DTU61kPj4dVYOr7DcA.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1200WS-S3A-%E5%89%8D%E4%BE%A7%E6%96%B9-lpKNxXPdxWuMxHJVa14cMwvINodAIL.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1200WS-S3A-%E5%89%8D%20%20%E4%BE%A7%E6%96%B9.png-JnTfv3mxFoAAJPOLooawoBLj05ruk2.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1200WS-S3A-%E5%B7%A6%E4%BE%A7-BEw36JhhPS6dkFdMUIwjwFp4PbthJG.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1200WS-S3A-%20%20%E5%89%8D%E4%BE%A7%E6%96%B9-lIgiKayfxkJpmLm3D2SMYdghOBoGTl.png",
    ],
    specifications: [
      { label: "Model", value: "MST1200WS-S3A" },
      { label: "Applicable Machine", value: "Large Wide-Mold Injection Molding Machine" },
      { label: "Drive System", value: "Three-Axis Servo Drive" },
      { label: "Control System", value: "MEROBOT/ROBOT" },
    ],
    features: [
      "Upgraded large working range",
      "Three-axis servo drive",
      "Four-wheel mobile base",
      "MEROBOT control system",
      "High-precision positioning",
    ],
  },
  {
    id: "mst1300ws-s3a",
    name: "MST1300WS-S3A",
    category: "Product Series 1",
    description:
      "Flagship wide-stroke model of the MST series, with the largest working range and strongest load capacity, for high-precision automation on super-large wide molds.",
    fullDescription:
      "The MST1300WS-S3A is the flagship model of the MST series wide-stroke (WS) three-axis servo robot arms, moving from 1200 to 1300, with the largest working range and strongest load capacity in the series. Using MEROBOT/ROBOT control technology, an independent control box (with a dual-fan cooling system) and a four-wheel mobile base, it is designed for injection molding automation on super-large wide molds, making it the preferred solution for high-end production lines.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1300WS-S3A-%E5%89%8D%E6%96%B9.png-z9Cnuzq5NyG4PbKZNqKKbXNqaIkITN.jpeg",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1300WS-S3A-%E5%89%8D%E6%96%B9.png-z9Cnuzq5NyG4PbKZNqKKbXNqaIkITN.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1300WS-S3A-%E6%AD%A3%E5%89%8D%E6%96%B9-fArXZyJ6vbck4KqSdCvsJQjS34qu8s.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1300WS-S3A-%E5%89%8D%E4%BE%A7%E6%96%B9-zGDrDF9SmCrb8MoMAXH9NVQI298Goq.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1300WS-S3A-%E5%89%8D%20%20%E4%BE%A7%E6%96%B9.png-QJaAmKBLMXEcC9PQwSqa3QkaYMGO3l.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1300WS-S3A-%E5%8F%B3%E5%89%8D%E4%BE%A7%E6%96%B9.png-cTEESQat1u7hUN18KTpt4uHMjehAwE.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1300WS-S3A-%E5%B7%A6%E4%BE%A7%E6%96%B9.png-9R4cDjHoCCBT7KVCRDTMCGriNb07Wl.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1300WS-S3A-%E5%B7%A6%E4%BE%A7-RY2MSa87Cu2WHL8zvGokzrdeNrpM4h.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1300WS-S3A-%E5%90%8E%E9%9D%A2-E1HQEAxEHYsbp1sy9DLJ976liqT9uc.png",
    ],
    specifications: [
      { label: "Model", value: "MST1300WS-S3A" },
      { label: "Applicable Machine", value: "Super-Large Wide-Mold Injection Molding Machine" },
      { label: "Drive System", value: "Three-Axis Servo Drive" },
      { label: "Control System", value: "MEROBOT/ROBOT" },
    ],
    features: [
      "Largest working range",
      "Three-axis servo drive",
      "Dual-fan cooling system",
      "Four-wheel mobile base",
      "Strongest load capacity",
    ],
  },
  {
    id: "mst1300ws-s3a-15kg",
    name: "MST1300WS-S3A-15KG",
    category: "Product Series 1",
    description:
      "15KG load version of the MST1300WS-S3A, designed for heavy products with greater load capacity and stability.",
    fullDescription:
      "The MST1300WS-S3A-15KG is the 15KG heavy-load version of the MST1300WS-S3A, designed for automated removal of heavy products. While retaining the excellent performance of the wide-stroke three-axis servo robot arm, it further strengthens load capacity, handling products up to 15KG. Using MEROBOT/ROBOT control technology, an independent control box (with a dual-fan cooling system) and a four-wheel mobile base, it is an ideal choice for heavy injection-molded product lines.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1300WS-S3A-15KG%E5%B7%A6%E5%89%8D%E4%BE%A7%20%283%29.png-uJhjFskN20ZEkCjFYGF3eo8Y0CyVB0.jpeg",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1300WS-S3A-15KG%E5%B7%A6%E5%89%8D%E4%BE%A7%20%283%29.png-uJhjFskN20ZEkCjFYGF3eo8Y0CyVB0.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1300WS-S3A-15KG%E5%B7%A6%E5%89%8D%E4%BE%A7%20%281%29-N9MdIZDQUFtlccgvhPxedJJfBwTYGy.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1300WS-S3A-15KG%E5%89%8D%E4%BE%A7%20%284%29.png-Cunelag7N5nhKXXTR9tfM8P68wQQF0.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1300WS-S3A-15KG%E6%AD%A3%E5%89%8D%E4%BE%A7%20%285%29-nViUvoRDw007sZZOvJ7XtW1qCRaAGc.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1300WS-S3A-15KG%E5%8F%B3%E4%BE%A7%20%282%29-JEPdmfBxTqCM4b8yrszhxmIUzCxIlf.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1300WS-S3A-15KG%E5%B7%A6%E4%BE%A7%20%286%29-BSmszYOu1eTPT3t9eKayb6tUmYdxqP.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1300WS-S3A-15KG%E5%90%8E%E4%BE%A7%20%287%29-YBeGXxbrMykTEqx4Yk86AxpqUO3HRo.png",
    ],
    specifications: [
      { label: "Model", value: "MST1300WS-S3A-15KG" },
      { label: "Load Capacity", value: "15KG" },
      { label: "Applicable Machine", value: "Heavy Injection-Molded Product Lines" },
      { label: "Drive System", value: "Three-Axis Servo Drive" },
      { label: "Control System", value: "MEROBOT/ROBOT" },
    ],
    features: [
      "15KG heavy load capacity",
      "Three-axis servo drive",
      "Dual-fan cooling system",
      "Four-wheel mobile base",
      "High-stability design",
    ],
  },
  {
    id: "mst1500ws-s3a-15kg",
    name: "MST1500WS-S3A-15KG",
    category: "Product Series 1",
    description:
      "Flagship 15KG heavy-load wide-stroke model of the MST series, with the largest working range and 15KG load capacity, for automated removal of super-large heavy products.",
    fullDescription:
      "The MST1500WS-S3A-15KG is the 15KG heavy-load flagship of the MST series wide-stroke (WS) three-axis servo robot arms, moving from 1300 to 1500, with the largest working range in the series and a strong 15KG load capacity. Using MEROBOT/ROBOT control technology, an independent control box (with a dual-fan cooling system) and a four-wheel mobile base, it is designed for automated handling of super-large heavy injection-molded products, making it the preferred solution for high-end heavy-duty production lines.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1500WS-S3A-15KG%E5%B7%A6%E5%89%8D%E4%BE%A7%20%283%29.png-W7pdPyrwRESAjdrip3PGNJkYvt8SAX.jpeg",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1500WS-S3A-15KG%E5%B7%A6%E5%89%8D%E4%BE%A7%20%283%29.png-W7pdPyrwRESAjdrip3PGNJkYvt8SAX.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1500WS-S3A-15KG%E5%B7%A6%E5%89%8D%E4%BE%A7%20%281%29-MX5Fz8380tVWHqg5OuSkFA9axKrCar.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1500WS-S3A-15KG%E5%89%8D%E4%BE%A7%20%284%29.png-mZT402CzUvgXsu0z4TSjUCagSexEkc.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1500WS-S3A-15KG%E6%AD%A3%E5%89%8D%E4%BE%A7%20%285%29-xubihtroCYNnskRcnK0NIDoRroO9ts.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1500WS-S3A-15KG%E5%8F%B3%E4%BE%A7%20%282%29-tIugcVefFpuZriUogT8de6bFgKjvlC.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1500WS-S3A-15KG%E5%B7%A6%E4%BE%A7%20%286%29-omTHLw3rmk10DdioTethboi5UXFOiC.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1500WS-S3A-15KG%E5%90%8E%E4%BE%A7%20%287%29-oFUYqi7mby3igVvdvP3YhOBL1JIpLt.png",
    ],
    specifications: [
      { label: "Model", value: "MST1500WS-S3A-15KG" },
      { label: "Load Capacity", value: "15KG" },
      { label: "Applicable Machine", value: "Super-Large Heavy Injection-Molded Product Lines" },
      { label: "Drive System", value: "Three-Axis Servo Drive" },
      { label: "Control System", value: "MEROBOT/ROBOT" },
    ],
    features: [
      "15KG heavy load capacity",
      "Largest working range",
      "Three-axis servo drive",
      "Dual-fan cooling system",
      "Four-wheel mobile base",
    ],
  },
  {
    id: "mst1800ws-s3a",
    name: "MST1800WS-S3A",
    category: "Product Series 1",
    description:
      "Super-large wide-stroke robot arm in the MST series with fixed-base mounting, designed for super-large injection molding machines with an extra-long stroke.",
    fullDescription:
      "The MST1800WS-S3A is the super-large model of the MST series wide-stroke (WS) three-axis servo robot arms, moving from 1500 to 1800, with an extra-long working stroke. Unlike the mobile-base versions, this model uses fixed-base mounting installed directly on the injection molding machine, providing higher stability and positioning accuracy. Using MEROBOT control technology, it is designed for automation on super-large injection molding machines, making it an ideal choice for super-large injection molding lines.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1800WS-S3A-%E5%B7%A6%E5%89%8D%E6%96%B91-54KHOFWTF0IhUz0W9n168tGnWM4lso.png",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1800WS-S3A-%E5%B7%A6%E5%89%8D%E6%96%B91-54KHOFWTF0IhUz0W9n168tGnWM4lso.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1800WS-S3A-%E5%B7%A6%E5%89%8D%E6%96%B9-7U5uyj59LcmFd2JNHj30zFjb1eRDTh.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1800WS-S3A--%E5%B7%A6%E5%89%8D%E6%96%B9.png-ozPdg9K0CZxwelXjoShz1qUuKY9Aie.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1800WS-S3A-%E5%B7%A6%20%20%20%E5%89%8D%E6%96%B9-wPCcxDMix6cFkeufOEatTZDZE2srz5.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1800WS-S3A-%E5%8F%B3%E5%89%8D%E6%96%B9-0YJxmsp19VbmEfGXZ9aQaXl0vKUvMq.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1800WS-S3A--%E5%8F%B3%E5%89%8D%E6%96%B9-JtA4x04t2hTVMPFnp0bDOw1vCiMKgm.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1800WS-S3A-%E5%B7%A6%E6%96%B9.png-L5JSyiE1vbjcHrWP8xlP42LzIRQX0G.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1800WS-S3A-%E5%B7%A6%20%20%E6%96%B9.png-IrpVt0UZTnqsVyRSKsef0MG1j5vE1D.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1800WS-S3A-%E6%AD%A3%E5%89%8D%E6%96%B9-0PUA54sg5SJpMtCaiojLq24bKgguCk.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1800WS-S3A-%E6%AD%A3%E5%89%8D%20%20%E6%96%B9-vtIxkRBLtL8boRQMWp3V5OBLKkLKeV.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1800WS-S3A-%E6%AD%A3%E5%8F%B3%E6%96%B9.png-J2bb6VREKYPGIIehJwb87Oa5gblLU3.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1800WS-S3A-%E5%8F%B3%E6%96%B9.png-lhbFldJvrchcqxQa4lc1fyLL2ZWSNY.jpeg",
    ],
    specifications: [
      { label: "Model", value: "MST1800WS-S3A" },
      { label: "Applicable Machine", value: "Super-Large Injection Molding Machine" },
      { label: "Drive System", value: "Three-Axis Servo Drive" },
      { label: "Mounting", value: "Fixed-Base Mounting" },
      { label: "Control System", value: "MEROBOT" },
    ],
    features: [
      "Extra-long working stroke",
      "Three-axis servo drive",
      "Fixed-base mounting",
      "MEROBOT control system",
      "High-stability design",
    ],
  },
  {
    id: "mst1900ws-s3a",
    name: "MST1900WS-S3A",
    category: "Product Series 1",
    description:
      "Upgraded MST1800WS-S3A with a larger working range, using fixed-base mounting, designed for super-large injection molding machines.",
    fullDescription:
      "The MST1900WS-S3A is the upgraded version of the MST1800WS-S3A, moving from 1800 to 1900, with a larger working range and stronger performance. It uses fixed-base mounting installed directly on the injection molding machine, providing outstanding stability and positioning accuracy. Equipped with MEROBOT control technology, it is designed for automation on super-large injection molding machines, making it a high-end choice for super-large injection molding lines.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1900WS-S3A-%E5%B7%A6%E5%89%8D%E6%96%B91-2BAMQfpG4oE2ZsYVPfSsT56TUIqu58.png",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1900WS-S3A-%E5%B7%A6%E5%89%8D%E6%96%B91-2BAMQfpG4oE2ZsYVPfSsT56TUIqu58.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1900WS-S3A-%E5%B7%A6%E5%89%8D%E6%96%B9-LmRh5eVg6GRRHqFkwEwlyemmeubLqN.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1900WS-S3A--%E5%B7%A6%E5%89%8D%E6%96%B9-jPOQVmN2FAhpy9fphCivbNSHqaGB6b.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1900WS-S3A-%E5%B7%A6%20%20%20%E5%89%8D%E6%96%B9-Dj2Q8SxHkgV7wgbKDEDOVAhvS6qjv3.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1900WS-S3A-%E5%8F%B3%E5%89%8D%E6%96%B9-NyXRQeQmtP40PoKb294GdyM4fJD6I9.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1900WS-S3A--%E5%8F%B3%E5%89%8D%E6%96%B9-FIclXIGnF3nPPEiigYo5IuXLPLJWH1.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1900WS-S3A-%E6%AD%A3%E5%89%8D%E6%96%B9-bIbJAlgVIUfq598mRIdSefM0uSvTzT.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1900WS-S3A-%E6%AD%A3%E5%89%8D%20%20%E6%96%B9-waIiLrUcbN2sAUxeye6aygr5xVWICR.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1900WS-S3A-%E5%B7%A6%E6%96%B9.png-kZFtHPs50zPuU2KC8fkMfG8UjR0SPx.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1900WS-S3A-%E5%B7%A6%20%20%E6%96%B9.png-mutLI5EQTqXECqhA7kXQPINoxfKwEy.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1900WS-S3A-%E6%AD%A3%E5%8F%B3%E6%96%B9.png-jWTnpYzYbhiNIbBjAQIuUuU8boxgNc.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1900WS-S3A-%E5%8F%B3%E6%96%B9.png-w46W5lr78YpDod1XIzDGRbBcRqeUfh.jpeg",
    ],
    specifications: [
      { label: "Model", value: "MST1900WS-S3A" },
      { label: "Applicable Machine", value: "Super-Large Injection Molding Machine" },
      { label: "Drive System", value: "Three-Axis Servo Drive" },
      { label: "Mounting", value: "Fixed-Base Mounting" },
      { label: "Control System", value: "MEROBOT" },
    ],
    features: [
      "Extra-large working range",
      "Three-axis servo drive",
      "Fixed-base mounting",
      "MEROBOT control system",
      "High-precision positioning",
    ],
  },
  {
    id: "mst2000ws-s3a",
    name: "MST2000WS-S3A",
    category: "Product Series 1",
    description:
      "Top flagship wide-stroke model of the MST series with a 2000mm extra-large working range and fixed-base mounting, for top-tier super-large injection molding machines.",
    fullDescription:
      "The MST2000WS-S3A is the top flagship of the MST series wide-stroke (WS) three-axis servo robot arms, moving from 1900 to 2000, with a 2000mm-class extra-large working range. It uses fixed-base mounting installed directly on the injection molding machine, providing industry-leading stability and positioning accuracy. Equipped with MEROBOT control technology, it is designed for automation on top-tier super-large injection molding machines, making it the ultimate solution for super-large injection molding lines.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST2000WS-S3A-%E5%B7%A6%E5%89%8D%E6%96%B9-YMJjuASNgtDpiLRBX8Z4OoExDjUiBc.png",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST2000WS-S3A-%E5%B7%A6%E5%89%8D%E6%96%B9-YMJjuASNgtDpiLRBX8Z4OoExDjUiBc.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST2000WS-S3A-%E5%B7%A6%E5%89%8D%E6%96%B91-isAzDdmG8CtUEkflB8YfAR16DdzIng.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST2000WS-S3A--%E5%B7%A6%E5%89%8D%E6%96%B9-YffMJwo1mzYTQuWcG5L9UZQxRBGd98.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST2000WS-S3A-%E5%B7%A6%20%20%20%E5%89%8D%E6%96%B9-R05dDzY0mnle22jFhOgiTu0a1SB7hj.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST2000WS-S3A-%E5%8F%B3%E5%89%8D%E6%96%B9-ZammDvXwpfjkp5X2R3tYpx5fFt5fRI.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST2000WS-S3A--%E5%8F%B3%E5%89%8D%E6%96%B9-FDPGKfcIYALVVQ2X7cSbt7bxvcX1GV.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST2000WS-S3A-%E6%AD%A3%E5%89%8D%E6%96%B9-qW4eu9kEIm8VucRSXBNzb2ylP19aQ1.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST2000WS-S3A-%E6%AD%A3%E5%89%8D%20%20%E6%96%B9-WtLh2M3w37IH3URn09u7RWjOB3QXdm.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST2000WS-S3A-%E5%B7%A6%E6%96%B9.png-4Stx9pGld3kmhLL1L4wx5bOwb68Bju.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST2000WS-S3A-%E5%B7%A6%20%20%E6%96%B9.png-JXt60aLa4by0HqralK0jw0eyL6CR2w.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST2000WS-S3A-%E5%8F%B3%E6%96%B9.png-jQqLH1vj5l8Gnr5Re8FjcXUBdGWcrY.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST2000WS-S3A-%E6%AD%A3%E5%8F%B3%E6%96%B9.png-XpuZyD60wHfxzF1jogmo3OCeJzJkKH.jpeg",
    ],
    specifications: [
      { label: "Model", value: "MST2000WS-S3A" },
      { label: "Applicable Machine", value: "Top-Tier Super-Large Injection Molding Machine" },
      { label: "Drive System", value: "Three-Axis Servo Drive" },
      { label: "Mounting", value: "Fixed-Base Mounting" },
      { label: "Control System", value: "MEROBOT" },
    ],
    features: [
      "2000mm extra-large working range",
      "Three-axis servo drive",
      "Fixed-base mounting",
      "MEROBOT control system",
      "Top-tier stability and precision",
    ],
  },
  {
    id: "mst2200ws-s3a",
    name: "MST2200WS-S3A",
    category: "Product Series 1",
    description:
      "Super-large wide-stroke model of the MST series with a 2200mm extra-large working range, designed for super-large injection molding machines with an extreme stroke.",
    fullDescription:
      "The MST2200WS-S3A is a super-large model of the MST series wide-stroke (WS) three-axis servo robot arms, moving from 2000 to 2200, with a 2200mm-class extra-large working range. Equipped with MEROBOT control technology and an intelligent control panel, it is designed for automation on super-large injection molding machines, delivering an extreme working stroke and outstanding operational stability.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST2200WS-S3A-%E5%B7%A6%E5%89%8D%E4%BE%A7.png-f7Z2SKWAISSkLyWUVVtxoEmqKHfXMq.jpeg",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST2200WS-S3A-%E5%B7%A6%E5%89%8D%E4%BE%A7.png-f7Z2SKWAISSkLyWUVVtxoEmqKHfXMq.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST2200WS-S3A-%E5%B7%A6%E5%89%8D%20%20%E4%BE%A7.png-0gmtnxItLi1B3Iqej33a38TSqfSCU6.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST2200WS-S3A-%E5%8F%B3%E5%89%8D%E4%BE%A7.png-AWxIrgBv3LxxBi0vxFkHAVmfmoQLtD.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST2200WS-S3A-%E5%89%8D%E4%BE%A7.png-wzpRH4reRf6XH5GAQn3aafQDTXcbxl.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST2200WS-S3A-%E5%B7%A6%E4%BE%A7-T3ZYXXCDcHRph44RvfFmjvePPochM3.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST2200WS-S3A-%E5%90%8E%E4%BE%A7-cq6K4W9400CXP8lBWiOnmEvWjaQLJF.png",
    ],
    specifications: [
      { label: "Model", value: "MST2200WS-S3A" },
      { label: "Applicable Machine", value: "Super-Large Injection Molding Machine" },
      { label: "Drive System", value: "Three-Axis Servo Drive" },
      { label: "Control System", value: "MEROBOT" },
    ],
    features: [
      "2200mm extra-large working range",
      "Three-axis servo drive",
      "Intelligent control panel",
      "MEROBOT control system",
      "Extreme working stroke",
    ],
  },
  {
    id: "mst2500ws-s3a",
    name: "MST2500WS-S3A",
    category: "Product Series 1",
    description:
      "Extreme model of the MST wide-stroke series with a 2500mm extra-large working range, designed for super-large injection molding machines with an industry-leading stroke.",
    fullDescription:
      "The MST2500WS-S3A is the extreme model of the MST series wide-stroke (WS) three-axis servo robot arms, moving from 2200 to 2500, with a 2500mm-class extra-large working range. Equipped with MEROBOT control technology and an intelligent control panel, it is designed for automation on super-large injection molding machines, delivering an industry-leading working stroke and outstanding operational stability, making it the extreme solution for super-large injection molding lines.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST2500WS-S3A-%E5%B7%A6%E5%89%8D%E4%BE%A7.png-6WHE5XgN1jdLS09JdmUjv6Zlde8VRG.jpeg",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST2500WS-S3A-%E5%B7%A6%E5%89%8D%E4%BE%A7.png-6WHE5XgN1jdLS09JdmUjv6Zlde8VRG.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST2500WS-S3A-%E5%B7%A6%E5%89%8D%20%20%E4%BE%A7.png-4jbkyia5ylJGYzgnV3Dfhv1Wq8iJ7d.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST2500WS-S3A-%E5%8F%B3%E5%89%8D%E4%BE%A7.png-Ps6ESALELFnAsWKcIPNyhiSha1pqh9.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST2500WS-S3A-%E5%89%8D%E4%BE%A7.png-CjJnwFbzgLNkJhCKJAz7kiqa05EqVa.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST2500WS-S3A-%E5%B7%A6%E4%BE%A7-R7mybshbiLykeW8R4tE2GPdEdy1QO7.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST2500WS-S3A-%E5%90%8E%E4%BE%A7-eC0kAEFTkcYR50D1xOW010FrekrO7z.png",
    ],
    specifications: [
      { label: "Model", value: "MST2500WS-S3A" },
      { label: "Applicable Machine", value: "Super-Large Injection Molding Machine" },
      { label: "Drive System", value: "Three-Axis Servo Drive" },
      { label: "Control System", value: "MEROBOT" },
    ],
    features: [
      "2500mm extra-large working range",
      "Three-axis servo drive",
      "Intelligent control panel",
      "MEROBOT control system",
      "Industry-leading working stroke",
    ],
  },
  {
    id: "mst3000ws-s3a",
    name: "MST3000WS-S3A",
    category: "Product Series 1",
    description:
      "Top flagship model of the MST wide-stroke series with a 3000mm extra-large working range, designed for super-large injection molding machines with the industry's largest stroke.",
    fullDescription:
      "The MST3000WS-S3A is the top flagship of the MST series wide-stroke (WS) three-axis servo robot arms, moving from 2500 to 3000, with a 3000mm-class extra-large working range — the largest stroke in the series. Equipped with MEROBOT control technology and an intelligent control panel, it is designed for automation on super-large injection molding machines, delivering the industry's largest working stroke and outstanding operational stability, making it the ultimate solution for super-large injection molding lines.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST3000WS-S3A-%E5%B7%A6%E5%89%8D%E4%BE%A7.png-1816glnnppZNd53HAZYUHB2OBzhpFI.jpeg",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST3000WS-S3A-%E5%B7%A6%E5%89%8D%E4%BE%A7.png-1816glnnppZNd53HAZYUHB2OBzhpFI.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST3000WS-S3A-%E5%B7%A6%E5%89%8D%20%20%E4%BE%A7.png-63Yh4zVQFEHWQJUzS3SwGhYTqZsCuW.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST3000WS-S3A-%E6%AD%A3%E5%89%8D.png-q2HvprEGi3tWttX4URfFFsx9EsClOP.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST3000WS-S3A-%E5%8F%B3%E5%89%8D.png-lcniMLIg13TMgQSo2i2sUr4OAnILeM.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST3000WS-S3A-%E5%8F%B3%E5%89%8D%E4%BE%A7.png-OVf1BwK7fNkaSmAN70xoIIiNFdu9IN.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST3000WS-S3A-%E5%89%8D%E4%BE%A7.png-8VlHzV577QQGJadSsq47sa69a2GL2s.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST3000WS-S3A-%E5%B7%A6%E4%BE%A7.png-YtWOWAqzm5ZcYki4oSE0c9FuZPYAC5.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST3000WS-S3A-%E5%B7%A6%20%20%E4%BE%A7-pxzCyt3djI9rlm2Tbs6H3SLAusoL5j.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST3000WS-S3A-%E5%90%8E%E4%BE%A7-4E5Nb9lr6p6m6nH2OLUoQwEYNliRaX.png",
    ],
    specifications: [
      { label: "Model", value: "MST3000WS-S3A" },
      { label: "Applicable Machine", value: "Super-Large Injection Molding Machine" },
      { label: "Drive System", value: "Three-Axis Servo Drive" },
      { label: "Control System", value: "MEROBOT" },
    ],
    features: [
      "3000mm extra-large working range",
      "Three-axis servo drive",
      "Intelligent control panel",
      "MEROBOT control system",
      "Industry's largest working stroke",
    ],
  },
  {
    id: "mst1100ws-s3kj",
    name: "MST1100WS-S3KJ",
    category: "Product Series 1",
    description:
      "S3KJ series wide-stroke three-axis servo robot arm in a stylish fluorescent green finish with a four-wheel mobile base, for mid-to-large injection molding machines.",
    fullDescription:
      "The MST1100WS-S3KJ is a wide-stroke (WS) three-axis servo robot arm in the S3KJ series, featuring a fresh, stylish fluorescent green finish for a more modern look. It comes with a four-wheel mobile base for flexible movement and positioning. With a 1100mm working range, it suits automated part removal on mid-to-large injection molding machines, making it an ideal choice for production lines that value both efficiency and aesthetics.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1100WS-S3KJ-%E5%B7%A6%E5%89%8D%E4%BE%A7-D69fMgRo9dByOOIVVRPHHObF554eFN.png",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1100WS-S3KJ-%E5%B7%A6%E5%89%8D%E4%BE%A7-D69fMgRo9dByOOIVVRPHHObF554eFN.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1100WS-S3KJ-%E5%B7%A6%E5%89%8D.png-o8W5qhfV2EplvCASngPvsW7VJT7AMC.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1100WS-S3KJ-%E5%B7%A6%20%20%E5%89%8D.png-TWVVSoM9NWMyGMLj4ywQvfM3HNqPVj.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1100WS-S3KJ-%E5%8F%B3%E5%89%8D.png-JiyF53E6XSiqIO5iGs8VpCqnh71NVn.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1100WS-S3KJ-%E6%AD%A3%E5%89%8D%E6%96%B9-WevbmEJGxe59ePLjbolP57iLFj4HIc.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1100WS-S3KJ-%E6%AD%A3%E5%89%8D.png-TITa2KtL9WhXtU5B5EnAHVYTsERVSB.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1100WS-S3KJ-%E5%B7%A6%E4%BE%A7.png-CpN1l5vBbVGAoOvgGDcIyPU1HhiO3k.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1100WS-S3KJ-%E5%8F%B3%E4%BE%A7.png-daAUO6kDHRIFjlGLe0t0o3Fi56cCey.jpeg",
    ],
    specifications: [
      { label: "Model", value: "MST1100WS-S3KJ" },
      { label: "Applicable Machine", value: "Mid-to-Large Injection Molding Machine" },
      { label: "Drive System", value: "Three-Axis Servo Drive" },
      { label: "Series", value: "S3KJ" },
    ],
    features: [
      "Stylish fluorescent green finish",
      "Three-axis servo drive",
      "Four-wheel mobile base",
      "1100mm working range",
      "Modern exterior design",
    ],
  },
  {
    id: "mst1300ws-s3kj",
    name: "MST1300WS-S3KJ",
    category: "Product Series 1",
    description:
      "Upgraded S3KJ series wide-stroke three-axis servo robot arm with a 1300mm working range, a stylish fluorescent green finish and a four-wheel mobile base.",
    fullDescription:
      "The MST1300WS-S3KJ is the upgraded version of the MST1100WS-S3KJ, moving from 1100 to 1300, with a larger 1300mm working range. It features a fresh, stylish fluorescent green finish for a modern look and a four-wheel mobile base for flexible movement and positioning, suited to automated part removal on large injection molding machines.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1300WS-S3KJ-%E5%B7%A6%E5%89%8D%E4%BE%A7-btqtsYoyer2Hdg07HGQtRAYdMZXNfD.png",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1300WS-S3KJ-%E5%B7%A6%E5%89%8D%E4%BE%A7-btqtsYoyer2Hdg07HGQtRAYdMZXNfD.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1300WS-S3KJ-%E5%B7%A6%E5%89%8D.png-Y6aOd5MuOGvlM1NgYlbIdYJLgO6cLb.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1300WS-S3KJ-%E5%B7%A6%20%20%E5%89%8D.png-7W9F0lo6ee66YbyXRv7ttscFfHOBHE.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1300WS-S3KJ-%E5%8F%B3%E5%89%8D.png-XsU0bL7AuiRzvKGAJottLFHhnjcEyo.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1300WS-S3KJ-%E6%AD%A3%E5%89%8D%E6%96%B9-lqmGHcQzPzoNlf6RrJFVbsZdB4Luui.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1300WS-S3KJ-%E6%AD%A3%E5%89%8D.png-nNJNdGBgxBa0WdZb4hzhvlqHoaojIa.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1300WS-S3KJ-%E5%B7%A6%E4%BE%A7.png-kDJo3NpLKYurBiYHrCd5hAZOiAl1yB.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MST1300WS-S3KJ-%E5%8F%B3%E4%BE%A7.png-SMKI9N0fsQRyuQ797iIObWUltYxZt4.jpeg",
    ],
    specifications: [
      { label: "Model", value: "MST1300WS-S3KJ" },
      { label: "Applicable Machine", value: "Large Injection Molding Machine" },
      { label: "Drive System", value: "Three-Axis Servo Drive" },
      { label: "Series", value: "S3KJ" },
    ],
    features: [
      "Stylish fluorescent green finish",
      "Three-axis servo drive",
      "Four-wheel mobile base",
      "1300mm working range",
      "Modern exterior design",
    ],
  },
  {
    id: "msr800id-s5a",
    name: "MSR800ID-S5A",
    category: "Product Series 2",
    description:
      "Dual-arm five-axis servo robot arm with a twin-column design, enabling simultaneous dual-station operation to greatly improve production efficiency.",
    fullDescription:
      "The MSR800ID-S5A is a dual-arm five-axis servo robot arm with an innovative twin-column (dual Y-axis) design, enabling simultaneous dual-station operation to greatly improve production efficiency. Equipped with the MEROBOT control system, a modern white body with green accents, and a four-wheel mobile base, it suits injection molding lines that require efficient dual-station operations.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR800ID-S5A-%E5%B7%A6%E5%89%8D%E4%BE%A7.png-cwEgHb5n5H2glJf9fJ5XsD3yHZgfMP.jpeg",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR800ID-S5A-%E5%B7%A6%E5%89%8D%E4%BE%A7.png-cwEgHb5n5H2glJf9fJ5XsD3yHZgfMP.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR800ID-S5A%E6%AD%A3%E5%89%8D%E4%BE%A7.png-zbf3aVwJfQ3ySBUuvIfoyMxniQaWhm.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR800ID-S5A%E5%89%8D%E4%BE%A7.png-XJ6Des66r2PxlQDfINyOPoMqlDK0Lo.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR800ID-S5A%E5%B7%A6%E4%BE%A7.png-DHzGTLAKdRgtQSG3HY4PrphZZ6tZkG.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR800ID-S5A-%E5%90%8E%E4%BE%A7.png-HWS1XclBI4bL7gjUrpy6bOzWAyZrdr.jpeg",
    ],
    specifications: [
      { label: "Model", value: "MSR800ID-S5A" },
      { label: "Applicable Machine", value: "Dual-Station Injection Molding Machine" },
      { label: "Drive System", value: "Five-Axis Servo Drive" },
      { label: "Design Feature", value: "Dual-Arm Twin-Column" },
      { label: "Control System", value: "MEROBOT" },
    ],
    features: [
      "Dual-arm twin-column design",
      "Five-axis servo drive",
      "Simultaneous dual-station operation",
      "Four-wheel mobile base",
      "MEROBOT control system",
    ],
  },
  {
    id: "msr900id-s5a",
    name: "MSR900ID-S5A",
    category: "Product Series 2",
    description:
      "Upgraded MSR800ID-S5A dual-arm five-axis servo robot arm with a larger working range, for larger dual-station injection molding machines.",
    fullDescription:
      "The MSR900ID-S5A is the upgraded version of the MSR800ID-S5A, moving from 800 to 900, with a larger working range. Using a twin-column (dual Y-axis) design for simultaneous dual-station operation, equipped with the MEROBOT control system and a four-wheel mobile base, it suits dual-station injection molding lines that require a larger working range.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR900ID-S5A-%E5%89%8D%E4%BE%A7.png-n3HHGmymr3ESQ3ppSihJO3LKcu0wY9.jpeg",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR900ID-S5A-%E5%89%8D%E4%BE%A7.png-n3HHGmymr3ESQ3ppSihJO3LKcu0wY9.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR900ID-S5A%E6%AD%A3%E5%89%8D%E4%BE%A7.png-xmMQNYqrvnDFx0wX1iZ7cxo3dDtDZC.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR900ID-S5A%E5%89%8D%E4%BE%A7.png-BiBkGClCyvOeaTWR9D6So3lCGVSHca.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR900ID-S5A%E5%B7%A6%E4%BE%A7.png-nxSkS3YvSRtVrItwv6FTEMh63FV71G.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR900ID-S5A-%E5%90%8E%E4%BE%A7.png-WnbQjcIcYHfze59pKWXi0MjjFpwKtp.jpeg",
    ],
    specifications: [
      { label: "Model", value: "MSR900ID-S5A" },
      { label: "Applicable Machine", value: "Large Dual-Station Injection Molding Machine" },
      { label: "Drive System", value: "Five-Axis Servo Drive" },
      { label: "Design Feature", value: "Dual-Arm Twin-Column" },
      { label: "Control System", value: "MEROBOT" },
    ],
    features: [
      "Dual-arm twin-column design",
      "Five-axis servo drive",
      "Larger working range",
      "Simultaneous dual-station operation",
      "MEROBOT control system",
    ],
  },
  {
    id: "msr900wd-s5a",
    name: "MSR900WD-S5A",
    category: "Product Series 2",
    description:
      "Wide dual-arm five-axis servo robot arm with a dual-fan cooling control box, for efficient operation on wide dual-station injection molding machines.",
    fullDescription:
      "The MSR900WD-S5A is a wide-dual (WD) dual-arm five-axis servo robot arm with a twin-column (dual Y-axis) design and a wider working range. It comes with a dual-fan cooling control box to ensure stable operation over long periods. Clear X+/X-/Y+/Y- axis markings make operation and maintenance easier. It suits automation on wide dual-station injection molding machines.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR900WD-S5A%E5%B7%A6%E5%89%8D.png-Bb7X33t2TLtqinVurkesXD6QWc2ykR.jpeg",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR900WD-S5A%E5%B7%A6%E5%89%8D.png-Bb7X33t2TLtqinVurkesXD6QWc2ykR.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR900WD-S5A%E6%AD%A3%E5%89%8D.png-xEty0E80kPUn7IJzixyfZkWFtymiY9.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR900WD-S5A%E5%89%8D%E4%BE%A7.png-GmagIipCF3Udah4CxJ4rjVVBeiI8pc.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR900WD-S5A%E5%B7%A6%E4%BE%A7.png-gV4fK1Pu4vBcQyulpRk9t6yDR1yhoA.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR900WD-S5A%E5%8F%B3%E4%BE%A7.png-WxjQUnSUNHXNagxd68GkWi7MkGnUKJ.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR900WD-S5A-%E5%90%8E%E4%BE%A7.png-8ZL0HL6Z6xP8DFsvGiwYybR1mcPd0o.jpeg",
    ],
    specifications: [
      { label: "Model", value: "MSR900WD-S5A" },
      { label: "Applicable Machine", value: "Wide Dual-Station Injection Molding Machine" },
      { label: "Drive System", value: "Five-Axis Servo Drive" },
      { label: "Design Feature", value: "Wide Dual-Arm Twin-Column" },
      { label: "Control System", value: "MEROBOT" },
    ],
    features: [
      "Wide dual-arm design",
      "Five-axis servo drive",
      "Dual-fan cooling system",
      "Four-wheel mobile base",
      "Clear axis markings",
    ],
  },
  {
    id: "msr1100wd-s5a",
    name: "MSR1100WD-S5A",
    category: "Product Series 2",
    description:
      "Upgraded MSR900WD-S5A 1100mm wide dual-arm five-axis servo robot arm with a larger working range and stronger load capacity.",
    fullDescription:
      "The MSR1100WD-S5A is the upgraded version of the MSR900WD-S5A, moving from 900 to 1100, with a larger 1100mm working range. Using a twin-column (dual Y-axis) design and the MEROBOT control system, it enables simultaneous dual-station operation to greatly improve production efficiency, suited to larger dual-station injection molding lines.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR1100WD-S5A%E5%8F%B3%E4%BE%A7%20%285%29.png-l6SqZbBERCbr5NByAbLahARtE3B4YC.jpeg",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR1100WD-S5A%E5%8F%B3%E4%BE%A7%20%285%29.png-l6SqZbBERCbr5NByAbLahARtE3B4YC.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR1100WD-S5A%E5%8F%B3%E4%BE%A7%20%284%29.png-PAeMOq79exBrKbh44Mo7AMUMOuYkMo.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR1100WD-S5A%E5%8F%B3%E4%BE%A7%20%286%29.png-TnVIzwejjGy9tJWcDVQKhGO5CV6Zlr.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR1100WD-S5A%E5%8F%B3%E4%BE%A7%20%281%29.png-inCnmXe7r0fy06YjFQa4cgJdlM7Z36.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR1100WD-S5A%E5%8F%B3%E4%BE%A7%20%282%29.png-CLsiIXmVnwJ7dXvHPi6JeHMv0mycbY.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR1100WD-S5A%E5%8F%B3%E4%BE%A7%20%283%29.png-3oWyKMjLlKgjuprPEKpv3CT5lkU2ku.jpeg",
    ],
    specifications: [
      { label: "Model", value: "MSR1100WD-S5A" },
      { label: "Applicable Machine", value: "Large Dual-Station Injection Molding Machine" },
      { label: "Drive System", value: "Five-Axis Servo Drive" },
      { label: "Design Feature", value: "Wide Dual-Arm Twin-Column" },
      { label: "Control System", value: "MEROBOT" },
    ],
    features: [
      "1100mm wide dual-arm",
      "Five-axis servo drive",
      "Simultaneous dual-station operation",
      "Four-wheel mobile base",
      "MEROBOT control system",
    ],
  },
  {
    id: "msr1300wd-s5a",
    name: "MSR1300WD-S5A",
    category: "Product Series 2",
    description:
      "Upgraded MSR1100WD-S5A 1300mm wide dual-arm five-axis servo robot arm, for super-large dual-station injection molding machines.",
    fullDescription:
      "The MSR1300WD-S5A is the upgraded version of the MSR1100WD-S5A, moving from 1100 to 1300, with a larger 1300mm working range. Using a twin-column (dual Y-axis) design with the MEROBOT control system and a dual-fan cooling system, it enables simultaneous dual-station operation, suited to super-large dual-station injection molding lines.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR1300WD-S5A%E5%B7%A6%E5%89%8D%E4%BE%A7%20%284%29.png-E6150pbSTeeAWG6e7Yi9fuynLutjbu.jpeg",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR1300WD-S5A%E5%B7%A6%E5%89%8D%E4%BE%A7%20%284%29.png-E6150pbSTeeAWG6e7Yi9fuynLutjbu.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR1300WD-S5A%E5%89%8D%E4%BE%A7%20%282%29.png-t6LqSPj8kaZ26v2RDCseRyWgKXyOJT.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR1300WD-S5A%E5%89%8D%E4%BE%A7%20%286%29.png-hLnO0mY9MTtWvho5R0at9iAPaaKbq2.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR1300WD-S5A%E5%8F%B3%E4%BE%A7%20%281%29.png-2XEqiGqhteGe1nYaUwGoauX0LJc5zZ.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR1300WD-S5A%E5%90%8E%E4%BE%A7%20%285%29.png-5B2vT2zDtkkN1xTbs4Re5S0Ma7T6IC.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR1300WD-S5A%E5%B7%A6%E4%BE%A7%20%283%29.png-4RDtk9z28yf3ZIgu575L06hqZxONzy.jpeg",
    ],
    specifications: [
      { label: "Model", value: "MSR1300WD-S5A" },
      { label: "Applicable Machine", value: "Super-Large Dual-Station Injection Molding Machine" },
      { label: "Drive System", value: "Five-Axis Servo Drive" },
      { label: "Design Feature", value: "Wide Dual-Arm Twin-Column" },
      { label: "Control System", value: "MEROBOT" },
    ],
    features: [
      "1300mm wide dual-arm",
      "Five-axis servo drive",
      "Dual-fan cooling system",
      "Simultaneous dual-station operation",
      "MEROBOT control system",
    ],
  },
  {
    id: "msr1300ws-s3a-series2",
    name: "MSR1300WS-S3A",
    category: "Product Series 2",
    description:
      "Single-arm three-axis servo wide-stroke robot arm with an independent control box and four-wheel mobile base, for wide-mold injection molding machines.",
    fullDescription:
      "The MSR1300WS-S3A (Product Series 2 version) is a single-arm three-axis servo wide-stroke robot arm with a single-column design and a 1300mm wide working range. Equipped with the MEROBOT control system, an independent control box and a four-wheel mobile base, it suits automated part removal for wide molds in injection molding.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR1300WS-S3A%E5%B7%A6%E5%89%8D%E4%BE%A7.png-GlOwb0n8vod4STsNu4GI77vmKFoK5H.jpeg",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR1300WS-S3A%E5%B7%A6%E5%89%8D%E4%BE%A7.png-GlOwb0n8vod4STsNu4GI77vmKFoK5H.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR1300WS-S3A%E5%89%8D%E4%BE%A7.png-TC29Hy72CDNrgM7MhmAtBAVggnAZh3.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR1300WS-S3A-%E5%8F%B3%E4%BE%A7.png-U5ElVDxPZTobb15Ch2wxFvqwwrRn7m.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR1300WS-S3A%E5%B7%A6%E4%BE%A7.png-I4Bg5LRttr95Ipzw1nxMYuwlmOlejW.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR1300WS-S3A%E5%90%8E%E4%BE%A7.png-nIF9PlLA0DgrXlcXmYXkLe13KRdUZy.jpeg",
    ],
    specifications: [
      { label: "Model", value: "MSR1300WS-S3A" },
      { label: "Applicable Machine", value: "Wide-Mold Injection Molding Machine" },
      { label: "Drive System", value: "Three-Axis Servo Drive" },
      { label: "Design Feature", value: "Single-Arm Wide-Stroke" },
      { label: "Control System", value: "MEROBOT" },
    ],
    features: [
      "1300mm wide working range",
      "Three-axis servo drive",
      "Independent control box",
      "Four-wheel mobile base",
      "MEROBOT control system",
    ],
  },
  {
    id: "msr1500ws-s3a",
    name: "MSR1500WS-S3A",
    category: "Product Series 2",
    description:
      "Upgraded MSR1300WS-S3A 1500mm wide single-arm three-axis servo robot arm, for larger wide-mold injection molding machines.",
    fullDescription:
      "The MSR1500WS-S3A is the upgraded version of the MSR1300WS-S3A, moving from 1300 to 1500, with a larger 1500mm wide working range. Using a single-column design, equipped with the MEROBOT control system, an independent control box and a four-wheel mobile base, it suits automated part removal for larger wide molds in injection molding.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR1500WS-S3A%E5%B7%A6%E5%89%8D%E4%BE%A7%20%284%29.png-4NHm75AyFdvUJ5Bf02pT87Tb13j7gJ.jpeg",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR1500WS-S3A%E5%B7%A6%E5%89%8D%E4%BE%A7%20%284%29.png-4NHm75AyFdvUJ5Bf02pT87Tb13j7gJ.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR1500WS-S3A%E5%89%8D%E4%BE%A7%20%281%29.png-fTCoyU0alGB6c2LBMvsxNgzaFXflvk.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR1500WS-S3A%E5%8F%B3%E4%BE%A7%20%282%29.png-ZvIahWQsnIVYqnzBsHtDZAPsTOl2J1.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR1500WS-S3A%E5%B7%A6%E4%BE%A7%20%283%29.png-XTlV61iP9VjqSN8wbmSoQBk4fPbGZE.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSR1500WS-S3A%E5%90%8E%E4%BE%A7%20%285%29.png-ahvEwQaNOFVmXymRlpTpNTogkbmOah.jpeg",
    ],
    specifications: [
      { label: "Model", value: "MSR1500WS-S3A" },
      { label: "Applicable Machine", value: "Large Wide-Mold Injection Molding Machine" },
      { label: "Drive System", value: "Three-Axis Servo Drive" },
      { label: "Design Feature", value: "Single-Arm Wide-Stroke" },
      { label: "Control System", value: "MEROBOT" },
    ],
    features: [
      "1500mm wide working range",
      "Three-axis servo drive",
      "Independent control box",
      "Four-wheel mobile base",
      "MEROBOT control system",
    ],
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category)
}

export function getAllCategories(): string[] {
  return [...new Set(products.map((p) => p.category))]
}
