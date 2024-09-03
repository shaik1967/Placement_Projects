function PlotObjectiveFunction(pop,rep,nobj)
if(nobj==2)
    plot(pop(:,1),pop(:,2),'ko');
    hold on;
    plot(rep(:,1),rep(:,2),'r*');
    xlabel('1^{st} Objective');
    ylabel('2^{nd} Objective');
    grid on;
    hold off;
elseif(nobj==3)
    plot3(pop(:,1),pop(:,2),pop(:,3),'ko');
    hold on;
    plot3(rep(:,1),rep(:,2),rep(:,3),'r*');
    xlabel('1^{st} Objective');
    ylabel('2^{nd} Objective');
    zlabel('3^{rd} Objective');
    grid on;
    hold off;
else
    disp('2D or 3D Graph not possible');
end
end