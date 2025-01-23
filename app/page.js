"use client";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import {
  Bot,
  Sparkles,
  FileSearch,
  Workflow,
  MessagesSquare,
} from "lucide-react";
import {
  Typography,
  Container,
  AppBar,
  Toolbar,
  Button,
  Card,
  CardContent,
  Avatar,
  Link as MuiLink,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
} from "@mui/material";
import Link from "next/link";
import ScrollingImages from "./components/ScrollingImages";
import { useState } from "react";

export default function Home() {
  const teamMembers = [
    {
      name: "Hamza Rehman",
      position: "Founder",
      imageUrl: "/hamza.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/hamzarehman4",
      githubUrl: "https://github.com/masterwithhamza",
      email: "mailto:hamza.rehman.shaikh@gmail.com",
    },
    {
      name: "Abdullah Bin Altaf",
      position: "Co-Founder",
      imageUrl: "/abdullah.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/abdullah-k18",
      githubUrl: "https://github.com/abdullah-k18",
      email: "mailto:abdullahkoraal@gmail.com",
    },
  ];

  const services = [
    {
      logo: <Bot size={40} color="white" />,
      title: "Custom Agent Development",
      description:
        "Tailored AI agents designed specifically for your business needs and workflows.",
    },
    {
      logo: <Workflow size={40} color="white" />,
      title: "Workflow Automation",
      description:
        "Streamline your processes with intelligent automation solutions.",
    },
    {
      logo: <MessagesSquare size={40} color="white" />,
      title: "Conversational AI",
      description:
        "Build sophisticated chatbots and virtual assistants for customer service.",
    },
    {
      logo: <FileSearch size={40} color="white" />,
      title: "RAG (Retrieval-Augmented Generation)",
      description:
        "Combine powerful retrieval systems with generative AI to enhance context-based responses.",
    },
  ];

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="bg-white min-h-screen">
      <AppBar
        sx={{
          backgroundColor: "white",
          color: "black",
          boxShadow: "none",
          position: "relative",
        }}
        className="border-b"
      >
        <Container>
          <Toolbar
            disableGutters
            className="flex justify-between flex-wrap sm:flex-nowrap"
          >
            <Link href="/" passHref>
              <div className="flex items-center cursor-pointer mb-2 sm:mb-0">
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="h-6 w-6 sm:h-8 sm:w-8 mr-2"
                />
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    fontWeight: "800",
                    background:
                      "linear-gradient(to right, #D3A8FF, #4A90E2, #4DE0D1)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                  className="text-base sm:text-xl"
                >
                  AgentsValley
                </Typography>
              </div>
            </Link>

            <Box className="ml-auto flex gap-6 items-center">
              <Link href="#home" passHref>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "600",
                    cursor: "pointer",
                    color: "#4A90E2",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.07)",
                    },
                  }}
                >
                  Home
                </Typography>
              </Link>

              <Link href="#services" passHref>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "600",
                    cursor: "pointer",
                    color: "#4A90E2",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.07)",
                    },
                  }}
                >
                  Services
                </Typography>
              </Link>

              <Link href="#team" passHref>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "600",
                    cursor: "pointer",
                    color: "#4A90E2",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.07)",
                    },
                  }}
                >
                  Team
                </Typography>
              </Link>

              <Link href="#contact-us" passHref>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "600",
                    cursor: "pointer",
                    color: "#4A90E2",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.07)",
                    },
                  }}
                >
                  Contact Us
                </Typography>
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <section
        id="home"
        className="justify-center items-center py-12 lg:h-screen"
      >
        <Container className="flex justify-center items-center text-center mb-20">
          <div className="flex flex-col gap-10">
            <div className="flex justify-center">
              <Bot
                size={100}
                className="animate-float text-[#5975fa] font-bold"
              />
            </div>

            <Typography
              variant="h3"
              className="text-black font-bold"
              sx={{
                fontSize: { xs: "1.8rem", md: "2.5rem", lg: "3rem" },
                fontWeight: "bolder",
              }}
            >
              Revolutionize Your Workflow with AI Agents
            </Typography>

            <Typography
              variant="body1"
              className="text-black"
              sx={{ fontSize: { xs: "1rem", md: "1.2rem" } }}
            >
              Discover a marketplace where businesses and individuals unlock the
              power of cutting-edge AI agents. Streamline operations, reduce
              costs, and amplify productivity like never before.
            </Typography>

            <div className="flex justify-center gap-6 mt-6">
              <button
                className="flex items-center bg-[#5975fa] text-white px-6 py-3 rounded-lg font-semibold gap-2"
                onClick={handleClickOpen}
              >
                Start Building
                <Sparkles className="h-6 w-6" />
              </button>

              <Link href="/agents" passHref>
                <button className="flex items-center bg-white text-black border border-black px-6 py-3 rounded-lg font-semibold gap-2">
                  Our Agents
                </button>
              </Link>
            </div>
          </div>
        </Container>
        <ScrollingImages />

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Coming Soon!</DialogTitle>
          <DialogContent>
            <Typography variant="body1">
              The &ldquo;Start Building&ldquo; feature is coming soon. Stay
              tuned!
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleClose}
              sx={{
                fontWeight: "bold",
                color: "#5975fa",
              }}
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </section>

      <section
        id="services"
        className="bg-gray-100 h-screen flex flex-col items-center justify-center"
      >
        <Typography
          variant="h4"
          className="text-center text-black"
          sx={{
            fontSize: {
              xs: "2rem",
              md: "2.5rem",
              marginBottom: 15,
              fontWeight: "bolder",
            },
          }}
        >
          Our Services
        </Typography>
        <Typography
          variant="body1"
          className="text-gray-600 mb-8"
          sx={{
            maxWidth: "600px",
            textAlign: "center",
            lineHeight: "1.6rem",
          }}
        >
          Comprehensive AI agent development solutions for your business.
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "1.5rem",
            padding: "0 1rem",
          }}
        >
          {services.map((service, index) => (
            <Card
              key={index}
              className="shadow-lg cursor-pointer"
              sx={{
                backgroundColor: "white",
                padding: "1.5rem",
                borderRadius: "0.75rem",
                textAlign: "left",
                minWidth: "250px",
                maxWidth: "300px",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <Box
                sx={{
                  marginBottom: "1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "60px",
                  height: "60px",
                  borderRadius: "10%",
                  background:
                    "linear-gradient(to right, #D3A8FF, #4A90E2, #4DE0D1)",
                }}
              >
                {service.logo}
              </Box>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", marginBottom: "0.5rem" }}
                className="text-gray-800"
              >
                {service.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "gray" }}
                className="text-gray-600"
              >
                {service.description}
              </Typography>
            </Card>
          ))}
        </Box>
      </section>

      <section id="team" className="py-16 bg-white">
        <Container>
          <Typography
            variant="h4"
            className="text-center text-black"
            sx={{
              fontSize: {
                xs: "2rem",
                md: "2.5rem",
                marginBottom: 30,
                fontWeight: "bolder",
              },
            }}
          >
            Meet Our Team
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="shadow-lg cursor-pointer"
                sx={{
                  padding: "1.5rem",
                  borderRadius: "0.75rem",
                  textAlign: "center",
                  color: "#caddfe",
                  backgroundColor: "#f7f7f7",
                }}
              >
                <Avatar
                  src={member.imageUrl}
                  alt={member.name}
                  sx={{
                    width: "100px",
                    height: "100px",
                    margin: "0 auto",
                    marginBottom: "1rem",
                  }}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      color: "black",
                    }}
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "black",
                      marginBottom: 1,
                    }}
                  >
                    {member.position}
                  </Typography>
                  <MuiLink
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: "black",
                      display: "inline-flex",
                      alignItems: "center",
                      marginRight: 1,
                      transition: "transform 0.3s ease-in-out",
                      "&:hover": {
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    <LinkedInIcon className="text-blue-500" />
                  </MuiLink>
                  <MuiLink
                    href={member.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: "black",
                      display: "inline-flex",
                      alignItems: "center",
                      marginRight: 1,
                      transition: "transform 0.3s ease-in-out",
                      "&:hover": {
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    <GitHubIcon className="text-[black]" />
                  </MuiLink>
                  <MuiLink
                    href={member.email}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: "black",
                      display: "inline-flex",
                      alignItems: "center",
                      transition: "transform 0.3s ease-in-out",
                      "&:hover": {
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    <EmailIcon className="text-[#EA4335]" />
                  </MuiLink>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <footer className="bg-[#5975fa] pt-4 pb-4">
        <Container>
          <div className="flex flex-col items-center">
            <div className="flex items-center space-x-4">
              <Link
                href="https://agentsvalley.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transform transition-transform duration-300 hover:scale-110"
              >
                <LanguageIcon />
              </Link>
              <Link
                href="mailto:contact@agentsvalley.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transform transition-transform duration-300 hover:scale-110"
              >
                <EmailIcon />
              </Link>
              <Link
                href="https://www.linkedin.com/company/agentsvalley"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transform transition-transform duration-300 hover:scale-110"
              >
                <LinkedInIcon />
              </Link>
              <Link
                href="https://github.com/agentsvalley"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transform transition-transform duration-300 hover:scale-110"
              >
                <GitHubIcon />
              </Link>
              <Link
                href="https://www.youtube.com/agentsvalley"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transform transition-transform duration-300 hover:scale-110"
              >
                <YouTubeIcon />
              </Link>
            </div>
            <Typography
              variant="body2"
              className="text-white text-center"
              sx={{ marginTop: 1 }}
            >
              &copy; 2025 Agents Valley. All rights reserved.
            </Typography>
          </div>
        </Container>
      </footer>
    </div>
  );
}
