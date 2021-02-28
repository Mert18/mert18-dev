/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import randomColor from 'randomcolor';




const TopImage = () => {

    const [color, setColor] = useState(randomColor())

    useEffect(() => {
        const interval = setInterval(() => {
            setColor(randomColor())
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <svg height="425px" width="1920px" className="mysvg" >
            <path
                d="M44.5,319.5c17.85-10.42,31.2-18.21,48-17,24,1.73,27.38,19.83,48,25,35.8,9,52.65-38.78,98-45,54-7.41,73.1,54.47,122,46,38.67-6.7,34.12-46.68,97-83,42.73-24.68,58.12-13.9,81-38,25.34-26.7,18.8-52.93,35-102,8.65-26.19,25.37-63.69,61.14-105H572.5c-29.43,10.1-56.68,25.54-63,50-8.33,32.25,25.82,56.63,14,84-9,20.75-32.17,15-64,37-49.82,34.39-34.54,77.11-69,93-45,20.77-82.35-47.06-165-38-38,4.17-31.28,18.65-83,27-53.57,8.65-85.5-2.89-116,20C13,283.65,5.11,296.54.5,306.32V355.4A184.75,184.75,0,0,1,44.5,319.5Z" fill={randomColor()} />
            <path
                d="M177.5,377.5c49.49,12.28,95.28,47.74,142,27,16.12-7.16,20.79-15.87,42-21,36.93-8.93,55.6,9.53,78,1,26.05-9.92,26.06-44.52,40-76,39.44-89.11,153.54-70.09,219-153,21.1-26.72,44.1-72.84,40-155H634.64c-35.77,41.31-52.49,78.81-61.14,105-16.2,49.07-9.66,75.3-35,102-22.88,24.1-38.27,13.32-81,38-62.88,36.32-58.33,76.3-97,83-48.9,8.47-68-53.41-122-46-45.35,6.22-62.2,54-98,45-20.62-5.17-24-23.27-48-25-16.8-1.21-30.15,6.58-48,17a184.75,184.75,0,0,0-44,35.9v58.1C83.35,367.56,140.59,368.34,177.5,377.5Z" fill={randomColor()} />
            <path
                d="M217.5,441.5c70.73-14.63,91.85,17.51,171,21,11.26.5,149.74,4.93,202-75,22.09-33.79,4.63-45.72,25-82,44.89-79.92,149.21-56.78,196-121,19.75-27.1,35.5-78.34-3-184h-70c4.1,82.16-18.9,128.28-40,155-65.46,82.91-179.56,63.89-219,153-13.94,31.48-13.95,66.08-40,76-22.4,8.53-41.07-9.93-78-1-21.21,5.13-25.88,13.84-42,21-46.72,20.74-92.51-14.72-142-27-36.91-9.16-94.15-9.94-177,36v76a515.48,515.48,0,0,0,134-20C179.25,456.61,186.1,448,217.5,441.5Z" fill={randomColor()} />
            <path
                d="M26.5,273.5c30.5-22.89,62.43-11.35,116-20,51.72-8.35,45-22.83,83-27,82.65-9.06,120,58.77,165,38,34.46-15.89,19.18-58.61,69-93,31.83-22,55-16.25,64-37,11.82-27.37-22.33-51.75-14-84,6.32-24.46,33.57-39.9,63-50h-113c-18.7,158.51-57.5,199.42-89,208-38.42,10.47-62.7-28-148-26-44.32,1.05-41.5,11.53-102,14-32.11,1.31-59.7-.54-90,16a125.78,125.78,0,0,0-30,23v70.86C5.11,296.54,13,283.65,26.5,273.5Z" fill={randomColor()} />
            <path
                d="M791.5,449.5c18-44.42,66.23-35.85,114-85,35.54-36.57,16.41-49.09,65-118,37.14-52.67,59.51-61.23,57-87-3.25-33.34-42.72-39.76-61-87-10.9-28.17-8.22-55.23-5-72H878.42a196.5,196.5,0,0,0,2.08,49c8,46.75,27.28,54.93,32,86,7,46.25-25.33,96.75-60,122-35.23,25.66-54.5,11.88-76,37-31.21,36.47-5.16,82.53-32,101-25.6,17.61-56.2-19.53-91-3-33.34,15.84-23.94,58.81-63,92-22.93,19.49-50.36,25.22-70,27,19.64-1.78,47.07-7.51,70-27,39.06-33.19,29.66-76.16,63-92,34.8-16.53,65.4,20.61,91,3,26.84-18.47.79-64.53,32-101,21.5-25.12,40.77-11.34,76-37,34.67-25.25,67-75.75,60-122-4.72-31.07-24-39.25-32-86a196.5,196.5,0,0,1-2.08-49H808.5c38.5,105.66,22.75,156.9,3,184-46.79,64.22-151.11,41.08-196,121-20.37,36.28-2.91,48.21-25,82-52.26,79.93-190.74,75.5-202,75-79.15-3.49-100.27-35.63-171-21-31.4,6.5-38.25,15.11-83,28a515.48,515.48,0,0,1-134,20v23h791C786.36,495.83,782.25,472.32,791.5,449.5Z" fill={randomColor()} />
            <path
                d="M24.5,144.5c32.48-19.6,67.25-16,118-10,102.8,12.11,97.79,13.21,106,13,41.84-1.05,100.93-27.73,172-147h-75c-35.24,77.27-70.47,97.07-96,101-42.76,6.58-64.45-30.45-117-18-29.36,7-39.59,22.54-79,28a176.32,176.32,0,0,1-53-.84v53.72A106.94,106.94,0,0,1,24.5,144.5Z" fill={randomColor()} />
            <path
                d="M60.5,41.5c22.2-16.52,47-2.08,82-3,22.18-.59,54.19-7.48,93-38H.5v95a183.34,183.34,0,0,0,28-20C48.35,58.28,49.72,49.52,60.5,41.5Z" fill={randomColor()} />
            <path
                d="M53.5,111.5c39.41-5.46,49.64-21,79-28,52.55-12.45,74.24,24.58,117,18,25.53-3.93,60.76-23.73,96-101h-110c-38.81,30.52-70.82,37.41-93,38-35,.92-59.8-13.52-82,3-10.78,8-12.15,16.78-32,34a183.34,183.34,0,0,1-28,20v15.16A176.32,176.32,0,0,0,53.5,111.5Z" fill={randomColor()} />
            <path
                d="M30.5,212.5c30.3-16.54,57.89-14.69,90-16,60.5-2.47,57.68-12.95,102-14,85.3-2,109.58,36.47,148,26,31.5-8.58,70.3-49.49,89-208h-39c-71.07,119.27-130.16,146-172,147-8.21.21-3.2-.89-106-13-50.75-6-85.52-9.6-118,10a106.94,106.94,0,0,0-24,19.88v71.08A125.78,125.78,0,0,1,30.5,212.5Z" fill={randomColor()} />
            <path
                d="M1834.5,374.5c-15.43-30.09-39.46-30.92-47-60-9.15-35.3,22.22-49.6,44-120,7.94-25.68,17.58-68.42,13-119a292.31,292.31,0,0,0-17-75h-80c13.54,18.19,28.73,45.07,23,73-10,48.82-73.11,48-90,97-14.22,41.22,25.87,55.19,43,159,11.34,68.7,1,106.5-5,124a207.2,207.2,0,0,1-32,59h130C1853,439.22,1846.69,398.27,1834.5,374.5Z" fill={randomColor()} />
            <path
                d="M1723.5,329.5c-17.13-103.81-57.22-117.78-43-159,16.89-49,80-48.18,90-97,5.73-27.93-9.46-54.81-23-73h-115c31.23,31.7,55.19,66.59,46,95-7.53,23.26-31,22.79-52,52-29.86,41.57-21.1,96.54-18,116,11.48,72,55.87,99.2,41,126-12.61,22.73-48.16,9.73-74,37-21.31,22.49-21.84,57.43-18,86h129a207.2,207.2,0,0,0,32-59C1724.53,436,1734.84,398.2,1723.5,329.5Z" fill={randomColor()} />
            <path
                d="M1575.5,426.5c25.84-27.27,61.39-14.27,74-37,14.87-26.8-29.52-54-41-126-3.1-19.46-11.86-74.43,18-116,21-29.21,44.47-28.74,52-52,9.19-28.41-14.77-63.3-46-95h-119a138,138,0,0,0,0,55c10.19,48.4,42.44,62,38,89-4.9,29.86-46.4,26-63,60-19.45,39.83,21.68,77.49,29,134,5.15,39.75-5.34,97.17-75,174h115C1553.66,483.93,1554.19,449,1575.5,426.5Z" fill={randomColor()} />
            <path
                d="M1827.5.5a292.31,292.31,0,0,1,17,75c4.58,50.58-5.06,93.32-13,119-21.78,70.4-53.15,84.7-44,120,7.54,29.08,31.57,29.91,47,60,12.19,23.77,18.47,64.72-18,138h103V.5Z" fill={randomColor()} />
            <path
                d="M1517.5,338.5c-7.32-56.51-48.45-94.17-29-134,16.6-34,58.1-30.14,63-60,4.44-27-27.81-40.6-38-89a138,138,0,0,1,0-55h-98a117,117,0,0,0,0,30c3.73,28.46,16.56,42.37,24,60,13.28,31.46,7.26,69.66-4,92-26.94,53.42-104.35,56.7-102,75,1.76,13.7,44.49,6.57,71,38,19.55,23.18,24.43,60.39,11,72s-37.33-9.47-51,2c-15.25,12.8,6.51,45.71-3,89-5.3,24.12-18.27,42.13-29,54h110C1512.16,435.67,1522.65,378.25,1517.5,338.5Z" fill={randomColor()} />
            <path
                d="M999.5,441.5c15-45.8,72.15-41.4,82-87,10.07-46.61-26.5-69.34-14-120,12.11-49.09,53.32-55.59,50-93-2.2-24.74-20.93-29.81-42-72a238.9,238.9,0,0,1-22-69h-92c-3.22,16.77-5.9,43.83,5,72,18.28,47.24,57.75,53.66,61,87,2.51,25.77-19.86,34.33-57,87-48.59,68.91-29.46,81.43-65,118-47.77,49.15-96,40.58-114,85-9.25,22.82-5.14,46.33,0,63h216C999.35,494.65,990.82,468,999.5,441.5Z" fill={randomColor()} />
            <path
                d="M1278.5,413.5c9.13-24.49,3.88-51.32-7-104-14.52-70.3-26.91-85.13-16-101,17.49-25.44,59.93-2.77,85-30,25.55-27.75,11-83.38-5-114-20.19-38.59-53.06-57.15-67-64h-65a195.32,195.32,0,0,0-10,61c0,56,25.09,69.12,18,104-9.78,48.09-64.36,56.45-61,92,2.32,24.52,28.62,24.14,36,52,8.92,33.69-23.28,57.87-53,121a391.56,391.56,0,0,0-28,82h112c6.14-9.2,15.24-23,26-40C1264.58,439.2,1275.12,422.56,1278.5,413.5Z" fill={randomColor()} />
            <path
                d="M1186.5,309.5c-7.38-27.86-33.68-27.48-36-52-3.36-35.55,51.22-43.91,61-92,7.09-34.88-18-48-18-104a195.32,195.32,0,0,1,10-61h-150a238.9,238.9,0,0,0,22,69c21.07,42.19,39.8,47.26,42,72,3.32,37.41-37.89,43.91-50,93-12.5,50.66,24.07,73.39,14,120-9.85,45.6-67,41.2-82,87-8.68,26.5-.15,53.15,8,71h98a391.56,391.56,0,0,1,28-82C1163.22,367.37,1195.42,343.19,1186.5,309.5Z" fill={randomColor()} />
            <path
                d="M1364.5,369.5c13.67-11.47,37.52,9.65,51-2s8.55-48.82-11-72c-26.51-31.43-69.24-24.3-71-38-2.35-18.3,75.06-21.58,102-75,11.26-22.34,17.28-60.54,4-92-7.44-17.63-20.27-31.54-24-60a117,117,0,0,1,0-30h-147c13.94,6.85,46.81,25.41,67,64,16,30.62,30.55,86.25,5,114-25.07,27.23-67.51,4.56-85,30-10.91,15.87,1.48,30.7,16,101,10.88,52.68,16.13,79.51,7,104-3.38,9.06-13.92,25.7-35,59-10.76,17-19.86,30.8-26,40h115c10.73-11.87,23.7-29.88,29-54C1371,415.21,1349.25,382.3,1364.5,369.5Z" fill={randomColor()} />
        </svg>
    )
}

export default TopImage