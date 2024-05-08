const steps = [
    {
      name: "User",
      rowIdx: 1,
      colIdx: 1,
      index: 0,
      image: { path: "person.svg", alt: "person icon" },
      text: "",
    },
    {
      name: "Start",
      rowIdx: 1,
      colIdx: 3,
      index: 0,
      image: { path: "phone_play.svg", alt: "phone icon" },
      text: "",
    },
    {
      name: "BackBone",
      rowIdx: 1,
      colIdx: 5,
      index: 1,
      image: { path: "tray_up.svg", alt: "extract icon" },
      text: "Mobile-net V2",
    },
    {
      name: "Neck",
      rowIdx: 3,
      colIdx: 5,
      index: 2,
      image: { path: "arrow.triangle.swap.svg", alt: "neck icon" },
      text: "",
    },
    {
      name: "Segmentation",
      rowIdx: 3,
      colIdx: 3,
      index: 3,
      image: { path: "road_lanes.svg", alt: "road lane icon" },
      text: "UNET",
    },
    {
      name: "Object Detection",
      rowIdx: 4,
      colIdx: 3,
      index: 4,
      image: { path: "object_detect.svg", alt: "detect icon" },
      text: "SSD",
    },
    {
      name: "Distance",
      rowIdx: 2,
      colIdx: 3,
      index: 5,
      image: { path: "person_distance.svg", alt: "distance icon" },
      text: "LSTM",
    },
    {
      name: "Notification",
      rowIdx: 3,
      colIdx: 1,
      index: 7,
      image: { path: "alarm.svg", alt: "alarm icon" },
      text: "",
    },
  ];
  
  const GridLines = [
    { row: 1, col: 2, line: "horizontalLine" },
    { row: 1, col: 4, line: "horizontalLine" },
    { row: 2, col: 5, line: "verticalLine" },
    { row: 2, col: 4, line: "middleToMiddleTop" },
    { row: 3, col: 4, line: "horizontalLine" },
    { row: 4, col: 4, line: "middleToMiddleDown" },
    { row: 2, col: 2, line: "topRightToMiddle" },
    { row: 3, col: 2, line: "horizontalLine" },
    { row: 4, col: 2, line: "BottomRightToMiddle" },
    { row: 2, col: 1, line: "verticalLine" },
  ];
  
  const stepText = [
    `The system starts by capturing the surrounding environment using the`,
  
    ` Utilizing MobileNet, a lightweight deep learning model optimized for
    mobile devices, it processes incoming data to extract relevant
    features necessary for understanding the surrounding environment`,
  
    `The neck of the system is responsible for processing the data from the,
    backbone and extracting the necessary information for the next stage`,
  
    `The segmentation stage is responsible for identifying the objects in the
    environment and separating them from the background`,
  
    `The object detection stage is responsible for identifying the objects in
    the environment and separating them from the background`,
  
    `The distance stage is responsible for calculating the distance between the
    user and the objects in the environment`,
  
    `The socket stage is responsible for sending the data to the user's device
    using a socket connection`,
  
    `The notification stage is responsible for notifying the user of any
    potential hazards in the environment`,
  ];


const horizontalLine = (
    <svg
    className="s stroke-teal-200"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <line x1="0" y1="50%" x2="100%" y2="50%" stroke="" strokeWidth="5" />
    </svg>
  );
  
  const middleToMiddleDown = (
    <svg
    className="s stroke-slate-400"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <line x1="100%" y1="0" x2="0%" y2="50%" stroke="" strokeWidth="5" />
    </svg>
  );
  
  const middleToMiddleTop = (
    <svg
    className="s stroke-slate-400"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <line x1="100%" y1="100%" x2="0%" y2="50%" stroke="" strokeWidth="5" />
    </svg>
  );
  
  const topRightToMiddle = (
    <svg
    className="s stroke-slate-400"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <line x1="100%" y1="50%" x2="0%" y2="100%" stroke="" strokeWidth="5" />
    </svg>
  );
  
  const BottomRightToMiddle = (
    <svg
    className="s stroke-slate-400"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <line x1="100%" y1="50%" x2="0%" y2="0" stroke="" strokeWidth="5" />
    </svg>
  );
  const verticalLine = (
    <svg
    className="s stroke-rose-300"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <line x1="50%" y1="100%" x2="50%" y2="0" stroke="" strokeWidth="5" />
    </svg>
  );
  
  const lines = {
    horizontalLine: horizontalLine,
    middleToMiddleTop: middleToMiddleTop,
    middleToMiddleDown: middleToMiddleDown,
    topRightToMiddle: topRightToMiddle,
    BottomRightToMiddle: BottomRightToMiddle,
    verticalLine: verticalLine,
  };


export { steps, GridLines, stepText, lines };