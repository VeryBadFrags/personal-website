source_folder = "src/"
build_folder = "build/"

input_wrapper_path = source_folder + "wrapper.html"
input_content_path = build_folder + "content.html"
content_tag = "<!-- Content -->"

output_path = build_folder + "index.html"

# Get Wrapper
wrapper_file = open(input_wrapper_path, "r")
wrapper = wrapper_file.read()
wrapper_file.close()

# Get content
content_file = open(input_content_path, "r")
content = content_file.read()
content_file.close()

# Inject content
output_html = wrapper.replace(content_tag, content)

# Write output
output_file = open(output_path, "w")
output_file.write(output_html)
output_file.close()

print("Bundled " + input_content_path + " into " + output_path)
