import {useEffect} from 'react';
import { Image } from 'react-bootstrap';

export default function ScrollButton() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <div>
      <Image
        onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}
        style={{
          position: 'fixed',
          fontSize: '20px',
          bottom: '40px',
          right: '40px',
          textAlign: 'center',
          height: '40px',
          cursor: 'pointer'
        }}
        src="data:image/png;base64,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"
      ></Image>
    </div>
  );
}


// import React, {useState} from 'react';
// import {FaArrowCircleUp} from 'react-icons/fa';

// import styled from 'styled-components';

// export const Heading = styled.h1`
// text-align: center;
// color: green;
// `;

// export const Content = styled.div`
// overflowY: scroll;
// height: 2500px;
// `;

// export const Button = styled.div`
// position: fixed;
// width: 100%;
// left: 50%;
// bottom: 40px;
// height: 20px;
// font-size: 3rem;
// z-index: 1;
// cursor: pointer;
// color: green;
// `;

// const ScrollButton = () =>{

// const [visible, setVisible] = useState(false)

// const toggleVisible = () => {
// 	const scrolled = document.documentElement.scrollTop;
// 	if (scrolled > 300){
// 	setVisible(true)
// 	}
// 	else if (scrolled <= 300){
// 	setVisible(false)
// 	}
// };

// const scrollToTop = () =>{
// 	window.scrollTo({
// 	top: 0,
// 	behavior: 'smooth'
// 	/* you can also use 'auto' behaviour
// 		in place of 'smooth' */
// 	});
// };

// window.addEventListener('scroll', toggleVisible);

// return (
// 	<Button>
// 	<FaArrowCircleUp onClick={scrollToTop}
// 	style={{display: visible ? 'inline' : 'none'}} />
// 	</Button>
// );
// }

// export default ScrollButton;


