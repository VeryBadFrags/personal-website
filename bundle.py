source_folder = "src/"
build_folder = "build/"

wrapper_path = source_folder + "wrapper.html"
content_tag = "<!-- Content -->"

content_path = build_folder + "content.html"

output_path = build_folder + "index.html"

# Get Wrapper
wrapper_file = open(wrapper_path, "r")
wrapper = wrapper_file.read()
wrapper_file.close()

# Get content
content_file = open(content_path, "r")
content = content_file.read()
content_file.close()

# Inject content
output_html = wrapper.replace(content_tag, content)

# Write output
output_file = open(output_path, "w")
output_file.write(output_html)
output_file.close()

print("Bundled " + content_path + " into " + output_path)
