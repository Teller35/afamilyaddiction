import React from "react";
import { Card, Col, Container, Image } from "react-bootstrap";
import Laura from "../assets/large/Laura1.jpg";


const AboutMe = () => {

  return (
    <Container>
      <Col xs={2} md={2}>
        <Image src={Laura} rounded className="CardImage" />
      </Col>
      <Card className="Card">
      <Card.Body className="CardBodyStyle">
        <Card.Title className="Center"><h1>Laura Wetzel</h1></Card.Title>
        <Card.Text className="fontColor">
        <p className="TextIndent">I am a mom of 5, a beautiful blended family. Divorced twice and finally married to my soul mate. I am
         one of 3 daughters from my mom and 7 siblings from my dad (long story)!</p>
        
        <p className="TextIndent">I am a Clinical Mental Health Counselor, in some states they call it a Licensed Professional Counselor. Whichever name you use,
          my job title is therapist. I am in a therapist chair because I have been in the client chair and probably should have been much sooner.
          My sister and I grew up with a lot of trauma and unfortunately no understanding of addiction or mental health.
          It just wasn’t something that was understood in our family, which left us vulnerable to it all. Since watching her deal with addiction,
          I have tried to stay aware from the big things like pain killers, alcohol and hard drugs.
          That’s not to say I am without my own addictions; food, sugar and caffeine being some common ones.</p>
        
        <p className="TextIndent">When my sister first starting taking prescription pain killers it was because of a car accident, she had issues before that,
          but this was the start of the down hill spiral. She thought because they were prescribed it was okay, then she built up a tolerance
          and took more, then more. Then when she couldn’t get that type anymore she switched to something different, and took more of that
          then switched doctors. Most of us know the basic story. I was watching my beautiful, vibrant, generous sister turn into
          a monstrous shell of herself. As the big sister all I wanted to do was save her, protect her, help her. So I gave her money,
          I drove her to doctor’s appointments, I “held” the pills for her, I did all the things I thought I should be doing.</p>

        <p className="TextIndent">When she had her second child she finally got “clean” for a while, or at least as clean as she could get without any real help.
          She still abused over the counter meds and drank too much sometimes, but we accepted it for what it was. She white knuckled it for
          as long as she could, until a few years ago when she lost control again. This time with alcohol, and she spiraled fast, too fast for
          any of us to understand or stop. Then the call came on May 5th that she was gone.</p>

        <p className="TextIndent">I plan to tell more of her story and mine in relation to her so I will leave it at that for now. But, losing her and dealing with
          not only that guilt will forever be a struggle. I know I am not the only one who has lost a loved one
          to this disease, whether by overdose, suicide, murder, incarceration, missing persons, etc. I know I am not the only one that feels that shame of how others look
          at them and their loved one. Addiction does not negate the person, it does not take away from who they were, how they loved and what
          we remember of them. Let’s work together to destigmatize this devastating disease.</p>
        </Card.Text>
        </Card.Body>
        </Card>
        </Container>
  );
};

export default AboutMe;