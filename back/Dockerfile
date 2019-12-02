FROM ruby:2.6.3

RUN apt-get update -qq && \
    apt-get install -y build-essential \ 
                       libpq-dev \   
                       libreadline-dev \
                       libssl-dev \
                       libxml2-dev \
                       libxslt1-dev \
                       libyaml-dev \     
                       nodejs \
                       default-mysql-client \
                       vim

RUN mkdir /app_name 
ENV APP_ROOT /app_name 
ENV PORT ${PORT}
WORKDIR $APP_ROOT

ADD Gemfile $APP_ROOT/Gemfile
ADD Gemfile.lock $APP_ROOT/Gemfile.lock

RUN gem install bundler
RUN bundle install
ADD ./src/ $APP_ROOT

EXPOSE 3000

CMD ["bundle", "exec", "rails", "s", "-b", "0.0.0.0"]