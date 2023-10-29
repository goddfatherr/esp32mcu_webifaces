# ESP32 Socket Communication Applications

Welcome to the ESP32 Socket Communication Projects repository. This repository contains a collection of projects and components for socket communication capabilities in embedded applications running on the ESP32 microcontroller for use in the IDF development environment.

## Project Structure

This repository is organized into the following folders:

### 1. tcp_server

The `tcp_server` folder contains a TCP server implementation for ESP32. A TCP server is a fundamental component for establishing bidirectional communication with other devices over a network. In this folder, you will find the necessary code and resources to set up and configure a TCP server on your ESP32.

### 2. ws_server

The `ws_server` folder focuses on WebSocket (WS) server implementations for the ESP32. WebSocket is a communication protocol that provides full-duplex, bidirectional communication channels over a single TCP connection. Use the resources in this folder to build WebSocket servers for your ESP32 projects.

### 3. web_clients

The `web_clients` folder contains web client implementations for the servers mentioned above:

#### - PIDs Tuning Web Client

Web client designed for tuning PID controllers. 

#### - Remote Car Control Web Client

Web client for remote control applications.

### 4. web_clients

The components folder contains the servers as a component that can be easily added to a project. 

## Getting Started

To get started with any projects in this repository, navigate to the respective folder and follow the provided README or instructions to set up and deploy the project on your ESP32. 

## Dependencies
See the CMakeLists in each project to correctly configure the required components before compiling. 
