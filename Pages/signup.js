import React from "react";
import { Link } from 'react-router-dom';
import { Card, Logo, Form, Input, Button } from './Component/authforms';

function Signup() {
  return (
    <Card>
      <Logo src={"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F118501033930818132%2F&psig=AOvVaw0QY8RT8skDKpYwNXuNis7u&ust=1594226844987000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLDZ8YHMu-oCFQAAAAAdAAAAABAD"} />
      <Form>
        <Input type="email" placeholder="email" />
        <Input type="password" placeholder="password" />
        <Input type="password" placeholder="password again" />
        <Button>Sign Up</Button>
      </Form>
      <Link to="/login">Already have an account?</Link>
    </Card>
  );
}

export default Signup;