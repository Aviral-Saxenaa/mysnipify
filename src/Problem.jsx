import React from "react";
import Navbar from "./Navbar";
import greentick from '../src/assets/greent.png';
import Compiler from "./compiler/Compiler";

const ProblemofDay = () => {
  const homeStyle = {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    padding: 20,
    background: `
      repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(255, 133, 244, 0.8) 50px, rgba(66, 133, 244, 0.8) 51px),
      repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(66, 133, 244, 0.8) 50px, rgba(66, 133, 244, 0.8) 51px),
      #5813ea`,
  };

  const contentStyle = {
    width: "95%",
    height: "85vh",
    border: "1px solid #ccc",
    borderRadius: 15,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#F3F6FC",
    overflow: "hidden",
  };

  const headingStyle = {
    width: "100%",
    backgroundColor: "#FFF4E8",
    fontSize: 25,
    fontFamily: "DM Sans, sans-serif",
    fontWeight: 600,
    padding: "10px 30px",
    height: "10vh",
  };

  const subHeadingStyle = {
    fontSize: 18,
    paddingTop: 10,
    paddingLeft: 20,
    textAlign: "left",
    fontWeight: 500,
  };

  const main = {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    padding: "20px 0",
  };

  const leftMainBox = {
    width: "70%",
    height: "100%",
    backgroundColor: "white",
    borderRadius: 15,
    border: "1px solid #ccc",
    boxShadow: "0 8px 12px rgba(0, 0, 0, 0.1)",
  };

  const rightMainBox = {
    width: "25%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const rightUpper = {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 15,
    border: "1px solid #ccc",
    boxShadow: "0 8px 12px rgba(0, 0, 0, 0.1)",
    padding: "10px 20px",
    overflowY: "auto",
  };

  const testCaseBox = {
    textAlign: "left",
    backgroundColor: "#f5f5f5",
    color: "#000",
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
  };

  const testCaseTitle = {
    fontWeight: "600",
    marginBottom: 5,
  };

  const acceptedBox = {
    height: "60px",
    borderRadius: 15,
    border: "1px solid #ccc",
    boxShadow: "0 8px 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#163020",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 15px",
    marginTop: 20,
  };

  return (
    <>
      <Navbar />
      <div style={homeStyle}>
        <div style={contentStyle}>
          <div style={headingStyle}>
            ⚡⚡ Problem of the Day
            <div style={subHeadingStyle}>
              Q -: How to Add 3 numbers in C++?
            </div>
          </div>

          <div style={main}>
            <div style={leftMainBox}>
              <Compiler />
            </div>

            <div style={rightMainBox}>
              <div style={rightUpper}>
                <h2 style={{ backgroundColor: "black", color: "white", padding: "8px 12px", borderRadius: 8, fontSize: 18 }}>Test Cases</h2>
                <div style={testCaseBox}>
                  <p style={testCaseTitle}>Example 1:</p>
                  <p>Input: 1 2 3</p>
                  <p>Output: 6</p>
                  <p>Explanation: 1 + 2 + 3 = 6</p>
                </div>
                <div style={testCaseBox}>
                  <p style={testCaseTitle}>Example 2:</p>
                  <p>Input: 4 5 6</p>
                  <p>Output: 15</p>
                  <p>Explanation: 4 + 5 + 6 = 15</p>
                </div>
              </div>

              <div style={acceptedBox}>
                <div style={{ color: "white", fontWeight: 600 }}>✅ ACCEPTED</div>
                <img src={greentick} alt="Accepted" style={{ height: "30px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProblemofDay;
