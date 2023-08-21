class Api::V1::GreetingsController < ApplicationController
    module Api
        module V1
          class GreetingsController < ApplicationController
            def random_greeting
              random_message = Message.order("RANDOM()").first
              render json: { greeting: random_message.message }
            end
          end
        end
      end      
end
