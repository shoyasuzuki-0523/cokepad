FROM ruby:2.6.3

RUN apt-get update -qq && \
    apt-get install -y build-essential \ 
                       libpq-dev \        
                       nodejs \
                       default-mysql-client \
                       vim

RUN mkdir /app_name 
ENV APP_ROOT /app_name 
WORKDIR $APP_ROOT

ADD Gemfile $APP_ROOT/Gemfile
ADD Gemfile.lock $APP_ROOT/Gemfile.lock

RUN bundle install
ADD ./src/ $APP_ROOT

CMD ["bundle", "exec", "rails", "s", "-p", "3000", "-b", "0.0.0.0"]