get '/' do
  @grandma = params[:grandma]
  # Look in app/views/index.erb
  erb :index
end

post '/grandma' do
  if params[:user_input] == ""
    @grandma = "SAY SOMETHING!!!!!"
  elsif params[:user_input] == params[:user_input].upcase
    @grandma = "I hear ya, Sonny."
  else
    @grandma = "SPEAK UP!!!"
  end
  return "<p id ='ajax'>#{@grandma}</p>" 
end
