module ApplicationHelper
  def ejs_template(template_name)
    Rails.root.join("app/views/#{template_name}.html.ejs")
  end
end
