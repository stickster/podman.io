% podman-wait 1

## NAME

podman\-wait - Wait on one or more containers to stop and print their exit codes

## SYNOPSIS

**podman wait** [*options*] _container_ [...]

**podman container wait** [*options*] _container_ [...]

## DESCRIPTION

Waits on one or more containers to stop. The container can be referred to by its
name or ID. In the case of multiple containers, Podman will wait on each consecutively.
After all specified containers are stopped, the containers' return codes are printed
separated by newline in the same order as they were given to the command.

## OPTIONS

#### **--condition**=_state_

Condition to wait on (default "stopped")

#### **--help**, **-h**

Print usage statement

#### **--ignore**

Ignore errors when a specified container is missing and mark its return code as -1.

#### **--interval**, **-i**=_duration_

Time interval to wait before polling for completion. A duration string is a sequence of decimal numbers, each with optional fraction and a unit suffix, such as "300ms", "-1.5h" or "2h45m". Valid time units are "ns", "us" (or "µs"), "ms", "s", "m", "h". Time unit defaults to "ms".

@@option latest

## EXAMPLES

```
$ podman wait mywebserver
0

$ podman wait --latest
0

$ podman wait --interval 2s
0

$ podman wait 860a4b23
1

$ podman wait mywebserver myftpserver
0
125

$ podman wait --ignore does-not-exist
-1
```

## SEE ALSO

**[podman(1)](podman.md)**

## HISTORY

September 2017, Originally compiled by Brent Baude<bbaude@redhat.com>
