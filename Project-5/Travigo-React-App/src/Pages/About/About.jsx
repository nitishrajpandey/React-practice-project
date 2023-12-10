// import React from 'react'

function About() {
  return (
    <div className="w-full flex flex-col p-20 mb-40 justify-center items-center relative top-40">
      <div>
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            <div className="w-full lg:w-5/12 flex flex-col justify-center">
              <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
                About Us
              </h1>
              <p className="font-normal text-base leading-6 text-gray-600">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum.In the first place we have
                granted to God, and by this our present charter confirmed for us
                and our heirs forever that the English Church shall be free, and
                shall have her rights entire, and her liberties inviolate; and
                we will that it be thus observed; which is apparent from
              </p>
            </div>
            <div className="w-full lg:w-8/12">
              <img
                className="w-full h-full"
                src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
                alt="A group of People"
              />
            </div>
          </div>

          <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
            <div className="w-full lg:w-5/12 flex flex-col justify-center">
              <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
                Our Story
              </h1>
              <p className="font-normal text-base leading-6 text-gray-600">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum.In the first place we have
                granted to God, and by this our present charter confirmed for us
                and our heirs forever that the English Church shall be free, and
                shall have her rights entire, and her liberties inviolate; and
                we will that it be thus observed; which is apparent from
              </p>
            </div>
            <div className="w-full lg:w-8/12 lg:pt-8">
              <div className="flex  justify-center lg:gap-4 shadow-lg rounded-md">
                <div className="p-4 pb-6 flex justify-center flex-col items-center">
                  <img
                    className="md:block hidden"
                    src="https://img.freepik.com/free-vector/portrait-boy-with-brown-hair-brown-eyes_1308-146018.jpg?size=626&ext=jpg&ga=GA1.1.320533881.1700804244&semt=ais"
                    alt="Alexa featured Image"
                  />
                  <img
                    className="md:hidden block w-[200px]"
                    src="https://img.freepik.com/free-vector/portrait-boy-with-brown-hair-brown-eyes_1308-146018.jpg?size=626&ext=jpg&ga=GA1.1.320533881.1700804244&semt=ais"
                    alt="Alexa featured Image"
                  />
                  <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                    Alexa
                  </p>
                </div>
                <div className="p-4 pb-6 flex justify-center flex-col items-center">
                  <img
                    className="md:block hidden"
                    src="https://img.freepik.com/free-vector/hand-drawn-side-profile-cartoon-illustration_23-2150503804.jpg?size=626&ext=jpg&ga=GA1.1.320533881.1700804244&semt=ais"
                    alt="Olivia featured Image"
                  />
                  <img
                    className="md:hidden block w-[200px]"
                    src="https://img.freepik.com/free-vector/hand-drawn-side-profile-cartoon-illustration_23-2150503804.jpg?size=626&ext=jpg&ga=GA1.1.320533881.1700804244&semt=ais"
                    alt="Olivia featured Image"
                  />
                  <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                    Olivia
                  </p>
                </div>
                <div className="p-4 pb-6 flex justify-center flex-col items-center">
                  <img
                    className="md:block hidden"
                    src="https://img.freepik.com/free-vector/hand-drawn-side-profile-cartoon-illustration_23-2150517168.jpg?size=626&ext=jpg&ga=GA1.1.320533881.1700804244&semt=ais"
                    alt="Liam featued Image"
                  />
                  <img
                    className="md:hidden block w-[200px]"
                    src="https://img.freepik.com/free-vector/hand-drawn-side-profile-cartoon-illustration_23-2150517168.jpg?size=626&ext=jpg&ga=GA1.1.320533881.1700804244&semt=ais"
                    alt="Liam featued Image"
                  />
                  <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                    Liam
                  </p>
                </div>
                <div className="p-4 pb-6 flex justify-center flex-col items-center">
                  <img
                    className="md:block hidden"
                    src="https://img.freepik.com/free-vector/hand-drawn-side-profile-cartoon-illustration_23-2150503821.jpg?size=626&ext=jpg&ga=GA1.1.320533881.1700804244&semt=ais"
                    alt="Elijah featured image"
                  />
                  <img
                    className="md:hidden block w-[200px]"
                    src="https://img.freepik.com/free-vector/hand-drawn-side-profile-cartoon-illustration_23-2150503821.jpg?size=626&ext=jpg&ga=GA1.1.320533881.1700804244&semt=ais"
                    alt="Elijah featured image"
                  />
                  <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                    Elijah
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
