# frozen_string_literal: true

require_relative "lib/social_share_rails/version"

Gem::Specification.new do |spec|
  spec.name = "social_share_rails"
  spec.version = SocialShareRails::VERSION
  spec.authors = ["Gleydson Tavares"]
  spec.email = ["tavares.gleydson@gmail.com"]

  spec.summary = "Add customizable social sharing buttons to your Ruby on Rails app."
  spec.description = "SocialShareRails is a gem that simplifies adding social sharing buttons to Rails applications. It supports multiple social platforms, customizable styles, and provides an easy-to-use API for sharing."
  spec.homepage = "https://github.com/g13ydson/social_share_rails"
  spec.license = "MIT"
  spec.required_ruby_version = ">= 2.5.9"

  spec.metadata["allowed_push_host"] = "https://rubygems.org"
  spec.metadata["homepage_uri"] = spec.homepage

  # Specify which files should be added to the gem when it is released.
  spec.files = IO.popen(%w[git ls-files -z], chdir: __dir__, err: IO::NULL) do |ls|
    ls.each_line("\x0", chomp: true).reject do |f|
      (f == File.basename(__FILE__)) ||
        f.start_with?(*%w[bin/ test/ spec/ features/ .git appveyor Gemfile]) ||
        f.end_with?(".gem")
    end
  end

  spec.bindir = "exe"
  spec.executables = spec.files.grep(%r{\Aexe/}) { |f| File.basename(f) }
  spec.require_paths = ["lib"]

  # Runtime dependencies
  spec.add_dependency "i18n", ">= 0.7"
  spec.add_dependency "rails", ">= 4.2", "< 8.0"

  # Development dependencies
  spec.add_development_dependency "bundler", "~> 2.0"
  spec.add_development_dependency "rspec", "~> 3.10"
  spec.add_development_dependency "rubocop", "~> 1.0"
end
