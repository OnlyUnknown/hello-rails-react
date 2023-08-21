# app/controllers/api/v1/greetings_controller.rb
class Api::V1::GreetingsController < ApplicationController
    def random_greeting
      random_message = Message.order("RANDOM()").first
  
      response.headers['Access-Control-Allow-Origin'] = 'http://localhost:3000' # Replace with your React frontend URL
      response.headers['Access-Control-Allow-Methods'] = 'GET, OPTIONS'
      response.headers['Access-Control-Allow-Headers'] = 'Origin, Content-Type, Accept, Authorization'
      response.headers['Access-Control-Allow-Credentials'] = 'true'
  
      render json: { greeting: random_message.message }
    end
  end
  