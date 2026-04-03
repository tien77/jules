import sys
import re

def style_to_object(style_str):
    if not style_str.strip(): return "{}"
    parts = style_str.split(';')
    obj_parts = []
    for p in parts:
        if ':' not in p: continue
        k, v = p.split(':', 1)
        k = k.strip()
        v = v.strip()

        # camelCase the key
        k_parts = k.split('-')
        k_camel = k_parts[0] + ''.join(x.capitalize() for x in k_parts[1:])

        # handle background-image with urls that might have quotes
        v = v.replace("'", '"')
        obj_parts.append(f"{k_camel}: '{v}'")
    return "{{ " + ", ".join(obj_parts) + " }}"

def html_to_jsx(html):
    # Extract body content if possible
    body_match = re.search(r'<body[^>]*>(.*?)</body>', html, re.DOTALL | re.IGNORECASE)
    if body_match:
        html = body_match.group(1)

    # Remove script tags
    html = re.sub(r'<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>', '', html)

    # Convert class to className
    html = html.replace('class="', 'className="')

    # Convert for to htmlFor
    html = html.replace('for="', 'htmlFor="')

    # Close self-closing tags (img, input, br, hr, meta, link)
    html = re.sub(r'<(img|input|br|hr|meta|link)([^>]*?)(?<!/)>', r'<\1\2 />', html)

    # Convert style="xyz" to style={{ x: y }}
    def style_repl(match):
        style_content = match.group(1)
        return f"style={style_to_object(style_content)}"

    html = re.sub(r'style="([^"]*)"', style_repl, html)
    html = re.sub(r"style='([^']*)'", style_repl, html)

    # some HTML entities might need conversion, but react handles most except some like &nbsp; directly, we can leave them

    return html

if __name__ == '__main__':
    infile = sys.argv[1]
    outfile = sys.argv[2]

    with open(infile, 'r', encoding='utf-8') as f:
        html = f.read()

    jsx_content = html_to_jsx(html)

    # Wrap in functional component
    component_name = "Component"
    if "Home" in outfile: component_name = "Home"
    elif "Dashboard" in outfile: component_name = "Dashboard"
    elif "CourseDetail" in outfile: component_name = "CourseDetail"
    elif "CourseList" in outfile: component_name = "CourseList"
    elif "Cart" in outfile: component_name = "Cart"
    elif "Login" in outfile: component_name = "Login"

    template = f"""export default function {component_name}() {{
  return (
    <>
      {jsx_content}
    </>
  );
}}
"""
    with open(outfile, 'w', encoding='utf-8') as f:
        f.write(template)
