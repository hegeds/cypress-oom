echo 'Starting profiler' | tee -a ./results.csv
sleep 5 # Wait for cypress to startup then get renderer PID
PID=$(pgrep 'Cypress Helper \(Renderer\)')

echo 'PID of cypress renderer:' $PID | tee -a ./results.csv

echo 'time, pid, mem, command' | tee -a ./results.csv
while true
do

TIME=$( date +%T)
MEMORY_USAGE=$(top -o pid -stats mem -pid $PID -l 1 | tail -1)
COMMAND_NAME=$(top -o pid -stats command -pid $PID -l 1 | tail -1)

echo $TIME, $PID, $MEMORY_USAGE, $COMMAND_NAME | tee -a ./results.csv

sleep 5
done
