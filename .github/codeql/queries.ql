from C in Call where C.name matches "input|request"
where not is_validated(C.arguments)
select C.name, C.arguments
