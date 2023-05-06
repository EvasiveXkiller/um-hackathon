import torch.nn as nn
import torch.nn.functional as F

CLASS_LABELS = ["LOW", "MID", "HIGH"]
num_classes = 3

input_dim = 6
hidden_dim = 60

class LogisticRegressionModel(nn.Module):
    def __init__(self):
        super(LogisticRegressionModel, self).__init__()
        # Linear function 1
        self.fc1 = nn.Linear(input_dim, 300) 
        self.relu1 = nn.ReLU()

        # Linear function 2
        self.fc2 = nn.Linear(300, 100)
        self.relu2 = nn.ReLU()
        self.dropout2 = nn.Dropout(p=0.5)

        # Linear function 3
        self.fc3 = nn.Linear(100, 30)
        self.relu3 = nn.ReLU()

        self.fc4 = nn.Linear(30, num_classes)   

    def forward(self, x):
        out = self.fc1(x)
        out = self.relu1(out)

        out = self.fc2(out)
        out = self.relu2(out)
        out = self.dropout2(out)

        out = self.fc3(out)
        out = self.relu3(out)


        out = self.fc4(out)
        out = F.softmax(out, dim=1)

        return out