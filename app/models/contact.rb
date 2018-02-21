class Contact < MailForm::Base
	attribute :name, :validate => true, :presence => true
	attribute :email, :validate => true
	attribute :phone, :validate => true
	attribute :topic, :validate => true
	attribute :message, :validate => true
	attribute :nickname, :captcha => true

	def headers 
		{
		:subject => "Contact Form",
		:to => "j.clement.cwi@gmail.com",
		:from => %("#{name}" <#{email}>)
		}
	end
end