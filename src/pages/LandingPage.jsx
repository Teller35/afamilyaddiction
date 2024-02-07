import React from "react";
import { Card } from "react-bootstrap";



const LandingPage = () => {

  return (
    <Card className="Card">
      <Card.Body className="CardBodyStyle">
      <p className="Center"><a href="/about" className="TwoFontColor">Laura Wetzel, CMHC</a></p>

      <p className="TextIndent"> I am a mom, partner, therapist and friend. But, before all of that I was a sister and that role defined most of my life.
      When my sister turned to prescription drugs several years ago, I had no idea how to help her. I was lost, confused and angry.</p>

      <p className="TextIndent">What I did do, was end up enabling her and helping it to continue without understanding what I was doing.
      Then I decided to start working in recovery, that’s where I not only found some of my answer but I also found my calling.
      I fell in love with this world and all the people in it. You will find the most amazing souls in the world of addiction both those
      suffering from the disease and the people around them.</p>
      
      <p className="TextIndent">My beautiful sister lost her fight in May of 2022, it was the worst day of my life. 
      What made it even harder were those who thought because she was an “addict” she didn’t matter, that it shouldn’t hurt as much or that
      I didn’t love her. None of that is true; she mattered, it hurts and she was loved. Those who have lost a loved one to this disease know
      that all too well.</p>
      
      <p className="TextIndent">My goal is to help others understand that loss, hear their stories, hear our stories, and see them as people
      not just “addicts.” If you have a story to tell; yours or someone you love, please <a href="/contact" className="TwoFontColor">reach out!</a></p>
      </Card.Body>
    </Card>
  );
};

export default LandingPage;