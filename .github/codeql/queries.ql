# Unused variables
from V in Variable
where is_defined(V) and not is_used(V)
select V.name as name, V.location.file as file, V.location.line as line
# Insecure file permissions
from F in File
where F.permissions > 644  # Change 644 based on your requirements
select F.path as path
# SQL injection vulnerabilities
from C in Call where C.name matches "query|execute"
select C.arguments
